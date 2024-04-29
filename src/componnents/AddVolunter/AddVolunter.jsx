import React from "react";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const AddVolunter = () => {
  const columns = [
    // {
    //   field: "image",
    //   headerName: "NAME",
    //   minWidth: 100,
    //   flex: 1,
    //   sortable: false,
    //   renderCell: ({ row }) => {
    //     return (
    //       <div>
    //         <div className="imgField p-2">
    //           <img src={row.img} alt="" className="w-50" />
    //         </div>
    //       </div>
    //     );
    //   },
    // },
    { field: "name", headerName: "Name", minWidth: 300, flex: 0.8 },

    {
      field: "email",
      headerName: "Email ID",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "regDate",
      headerName: "Registration Date",
      minWidth: 150,
      flex: 0.3,
      cellClassName: ({ row }) => {
        return row.role === "admin" ? "colorRed" : "greenColor";
      },
    },

    {
      field: "volunter",
      headerName: "Volunteer List",
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/admin/user/${params.id}`}>
              <FaEdit className="admin-svgBtn" />
            </Link>

            <MdDelete className="admin-svgBtn" />
          </div>
        );
      },
    },
  ];

  const rows = [];

  return (
    <div>
      <DataGrid
        getRowHeight={() => "auto"}
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        disableColumnSelector
        autoHeight={true}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default AddVolunter;
