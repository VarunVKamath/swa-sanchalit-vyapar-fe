import React from 'react';
import PropTypes from 'prop-types';
import {IoIosArrowRoundUp} from 'react-icons/io';
import DataTable from 'react-data-table-component';

import "./DataTableStyles.scss";
import Pagination from '../../controls/Pagination/Pagination';

const DataTableView = ({
                         title,
                         paginationServer = true,
                         pagination = true,
                         ...props
                       }) => {

  return (
    <div className="data_table">
      <DataTable
        title={<h3
        className={`H2 ${title ? 'mb-4' : 'mb-0'}`}>{title}</h3>}
        className={'dataTable'}
        sortIcon={<IoIosArrowRoundUp/>}

        pagination={pagination}
        paginationServer={paginationServer}
        paginationComponent={Pagination}
        {...props}
      />
    </div>
  );
};

DataTableView.propTypes = {
  title: PropTypes.string,
  paginationServer: PropTypes.bool,
  pagination: PropTypes.bool,
};

export default DataTableView;