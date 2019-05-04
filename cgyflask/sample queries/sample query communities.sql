select array_to_json(array_agg(row_to_json(t)))
    from (
      select comm_code, name, sector, class, res_cnt,dwell_cnt, comm_structure, gcoord,gcenter from census2018 where class = 'Residential' order by name limit 50
    ) t


    --<Dropdown.Item  onClick={this.onClickHandler}>DEER RIDGE</Dropdown.Item>
select '<Dropdown.Item  onClick={this.onClickHandler}>' || name|| '</Dropdown.Item>'  from census2018  where class = 'Residential' order by name
limit 50