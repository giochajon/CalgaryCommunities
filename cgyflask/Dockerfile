FROM python:3.12-slim

WORKDIR /app

COPY cgyflask/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY cgyflask/cgyflask.py cgyflask/dbcomm.py ./
COPY db/init.sql ./init.sql

EXPOSE 5000

CMD ["python", "cgyflask.py"]
