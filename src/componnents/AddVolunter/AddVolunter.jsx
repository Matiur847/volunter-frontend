import React, { useEffect, useState } from "react";
import "../../style/AddVolunter.css";
import { MdDelete } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const AddVolunter = () => {
  const [allVolunter, setAllVolunter] = useState();
  const [status, setStatus] = useState(0);
  console.log(allVolunter);
  const columns = [
    {
      field: "image",
      headerName: "Image",
      minWidth: 100,
      flex: 1,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <div>
            <div className="imgField p-2">
              <img src={row.img} alt="" className="w-50" />
            </div>
          </div>
        );
      },
    },
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
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="deleteAction">
            <MdDelete className="admin-svgBtn" />
          </div>
        );
      },
    },
  ];

  const rows = [];

  allVolunter?.users &&
    allVolunter?.users?.users.forEach((item) => {
      rows.push({
        id: item.uid,
        img: item.photoURL,
        name: item.displayName,
        regDate: item.metadata?.creationTime,
        email: item.email,
      });
    });

  useEffect(() => {
    axios
      .get("http://localhost:4242/api/v1/allUser")
      .then((res) => {
        setStatus(res.status);
        setAllVolunter(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let data;

  if (status === 200) {
    data = (
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
    );
  } else {
    data = (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return <div>{data}</div>;
};

export default AddVolunter;
