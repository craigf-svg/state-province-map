
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TableStyle.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
    loader: { load: ["input/asciimath"] },
    asciimath: { displaystyle: false }
};

export default function RegionStatsTable(props) {
    const { data } = props;
    return (
        <MathJaxContext config={config}>
            <div className="table-container">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ '& .MuiTableCell-root': { fontSize: '14px' } }}>
                                <TableCell>
                                    <MathJax>
                                        {"`text(Name)`"}
                                    </MathJax>
                                </TableCell>
                                <TableCell align="center">
                                    <MathJax>
                                        {"`text(Abbreviation)`"}
                                    </MathJax>
                                </TableCell>
                                <TableCell align="center">
                                    <MathJax>
                                        {"`text(Landmass)`"}&nbsp;{"`(mi^2)`"}
                                    </MathJax>
                                </TableCell>
                                <TableCell align="center">
                                    <MathJax>
                                        {"`text(Density)`"}&nbsp;{"`(frac(text(population))(mi^2))`"}
                                    </MathJax>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(!data || data.length === 0) ? (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        No data to display
                                    </TableCell>
                                </TableRow>
                            ) : (
                                data.map((region) => (
                                    <TableRow
                                        key={region.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {region.name}
                                        </TableCell>
                                        <TableCell align="left">{region.abbreviation}</TableCell>
                                        <TableCell align="left">{(region.land_mass && !isNaN(region.land_mass)) ? `${Number(region.land_mass).toLocaleString()}` : "N/A"} </TableCell>
                                        <TableCell align="left">{(region.density && !isNaN(region.density)) ? `${Number(region.density).toLocaleString()}` : "N/A"} </TableCell>
                                    </TableRow>
                                )))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </MathJaxContext>
    )
}