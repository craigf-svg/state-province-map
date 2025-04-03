
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RegionStatsTable(props) {
    const { data } = props;
    return (
        <div style={{ minWidth: 650, maxWidth: '50%', maxHeight: '50%', marginBottom: '20px' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, maxHeight: '50%' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Abbreviation</TableCell>
                            <TableCell align="left">Landmass&nbsp;(mi²)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(!data || data.length === 0) ? (
                            <TableRow>
                                <TableCell colSpan={3} align="center">
                                    No data to display
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((region) => (
                                <TableRow
                                    key={region.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {region.name}
                                    </TableCell>
                                    <TableCell align="left">{region.abbreviation}</TableCell>
                                    <TableCell align="left">{(region.land_mass && !isNaN(region.land_mass)) ? `${Number(region.land_mass).toLocaleString()} mi²` : "N/A"} </TableCell>
                                </TableRow>
                            )))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}