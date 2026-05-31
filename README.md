# CalgaryCommunities

```
  ____      _                         ____                            _ _         ___        __
 / ___|__ _| | __ _  __ _ _ __ _   _ / ___|___  _ __ ___  _   _ _ __ (_| |_ _   _|_ _|_ __  / _| ___
| |   / _` | |/ _` |/ _` | '__| | | | |   / _ \| '_ ` _ \| | | | '_ \| | __| | |  | || '_ \| |_ / _ \
| |__| (_| | | (_| | (_| | |  | |_| | |__| (_) | | | | | | |_| | | | | | |_| |_|  | || | | |  _| (_) |
 \____\__,_|_|\__, |\__,_|_|   \__,  \____\___/|_| |_| |_|\__,_|_| |_|_|\__|\__, |___|_| |_|_|  \___/
              |___/            |___/                                           |___/
```

Created by [Giovanni Chajon](https://www.linkedin.com/in/giochajon/) and [Alex Jinga](https://www.linkedin.com/in/alex-jinga/)

A tool to compare side-by-side information on two Calgary communities (neighborhoods). Calgary has 200+ communities — roughly the geographic size of New York — so finding and comparing them is harder than it should be.

Built as a full-stack demonstration: React front-end, Python/Flask API, Node/Express API, and a PostgreSQL database seeded with open data from the City of Calgary.

---

## Architecture

| Service | Technology | Role |
|---|---|---|
| `cgyhood` | React + Vite, served by nginx | Front-end SPA |
| `cgyflask` | Python / Flask | Community data API (`/community/`) |
| `cgydata_express` | Node / Express / Knex | Comparison stats API (`/compare/`) |
| `postgres` | PostgreSQL 16 | Database (seeded automatically on first run) |

nginx serves the React app on port 80 and proxies API calls internally to Flask and Express — no ports other than 80 are exposed to the host.

---

## Running with Docker (recommended)

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with the Compose plugin (`docker compose version` should work)

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/giochajon/CalgaryCommunities.git
cd CalgaryCommunities
```

**2. Create your `.env` file**

```bash
cp .env.example .env
```

Open `.env` and set a username and password for the database:

```
DB_USER=cgy_user
DB_PASSWORD=your_password_here
DB_NAME=cgyinfo
```

**3. Build and start all services**

```bash
docker compose up --build
```

On first run Docker will:
- Build the three application images
- Start PostgreSQL and automatically run `db/init.sql`, which creates the tables and loads all 208 Calgary communities
- Start Flask and Express (they wait for the database to be ready)
- Build the React app and serve it through nginx

**4. Open the app**

Navigate to [http://localhost](http://localhost)

---

## Deploying to Render

The `render.yaml` blueprint deploys all four services (database, Flask, Express, React) in one shot.

### Steps

**1. Push the repository to GitHub** (if you haven't already)

**2. Create a new Blueprint on Render**

- Go to [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**
- Connect your GitHub account and select the `CalgaryCommunities` repository
- Render will read `render.yaml` and show you the four services to create — click **Apply**

**3. Wait for Flask and Express to finish deploying**

Render will show live build logs. Flask automatically seeds the database (all 208 communities) on its first start.

**4. Set the API URLs for the React app**

Once `cgyflask` and `cgydata-express` are live you'll see their public URLs in the Render dashboard (e.g. `https://cgyflask.onrender.com`).

- Go to the **cgyhood** service → **Environment**
- Add two variables:

| Key | Value |
|---|---|
| `VITE_FLASK_URL` | `https://cgyflask.onrender.com` |
| `VITE_EXPRESS_URL` | `https://cgydata-express.onrender.com` |

- Click **Save Changes** — Render will automatically redeploy the static site with the correct API URLs

**5. Open the app**

The URL is shown at the top of the `cgyhood` service page in the Render dashboard.

> **Free tier note:** Web services on Render's free plan spin down after 15 minutes of inactivity. The first request after a sleep period may take 30–60 seconds while the service wakes up.

---

## Running locally (without Docker)

You need Node 20+, Python 3.12+, and a running PostgreSQL instance with the `cgyinfo` database loaded from `db/init.sql`.

### Database

```bash
createdb cgyinfo
psql cgyinfo < db/init.sql
```

### Flask API (port 5000)

```bash
cd cgyflask
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

export DB_HOST=localhost
export DB_USER=your_user
export DB_PASSWORD=your_password
export DB_NAME=cgyinfo

python cgyflask.py
```

### Express API (port 3000)

```bash
cd cgydata_express
npm install

# create a .env file
echo "db_host=localhost"     >  .env
echo "db_user=your_user"     >> .env
echo "db_password=your_pass" >> .env
echo "db_name=cgyinfo"       >> .env

npm start
```

### React front-end (port 5173)

```bash
cd cgyhood
npm install
npm run start
```

The Vite dev server is pre-configured to proxy `/community/` to Flask on port 5000 and `/compare/` to Express on port 3000.

---

## Project structure

```
CalgaryCommunities/
├── docker-compose.yml       # orchestrates all four services
├── .env.example             # template for DB credentials
├── db/
│   └── init.sql             # schema + 208 Calgary communities (auto-loaded by Postgres)
├── cgyhood/                 # React front-end
│   ├── Dockerfile
│   ├── nginx.conf           # serves SPA and proxies API routes
│   └── src/
├── cgyflask/                # Python/Flask community API
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── cgyflask.py
│   └── dbcomm.py
└── cgydata_express/         # Node/Express comparison API
    ├── Dockerfile
    ├── server.js
    └── kinexBase.js
```

---

## API endpoints

### Flask (`/community/`)

| Method | Path | Description |
|---|---|---|
| GET | `/community/` | List of all residential community names |
| GET | `/community/<NAME>/` | Full data for one community |

### Express (`/compare/`)

| Method | Path | Description |
|---|---|---|
| GET | `/compare/<comm1>/<comm2>` | Side-by-side stats for two communities |

---

## Data source

Community boundaries, population counts, and dwelling counts come from the
[City of Calgary Open Data portal](https://data.calgary.ca/).
Geo-coordinates were converted from ArcGIS format to lat/lng using Python.
