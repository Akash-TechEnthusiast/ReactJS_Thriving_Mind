import "./list.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Submitted",
  },
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Pending",
  },
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Open",
  },
  {
    name: "Toyota",
    calories: "Celica",
    fat: 35000,
    carbs: "Toyota",
    protein: "Celica",
    imgurl: "https://www.w3schools.com/images/w3schools_green.jpg",
    product: "pencil",
    status: "Approved",
  },
];

const List = () => {
  return (
    <div className="list">
      <TableContainer component={Paper} className="table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell>Image&nbsp;Url</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fat&nbsp;(g)</TableCell>
              <TableCell>Carbs&nbsp;(g)</TableCell>
              <TableCell>Protein&nbsp;(g)</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>

                <TableCell>{row.name}</TableCell>

                <TableCell>
                  {" "}
                  <div className="cellWrapper">
                    <img src={row.imgurl} alt="W3Schools.com" className="image"/>
                    {row.product}
                  </div>
                </TableCell>

                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
