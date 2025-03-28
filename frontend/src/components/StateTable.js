
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StateTable(props) {
    const { data } = props;
    return (
        <div style={{ minWidth: 650, maxWidth: '50%', maxHeight: '50%' }}>
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
                        {data.map((state) => (
                            <TableRow
                                key={state.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {state.name}
                                </TableCell>
                                <TableCell align="left">{state.abbreviation}</TableCell>
                                <TableCell align="left">{state.land_mass}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}