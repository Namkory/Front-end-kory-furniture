import Cards from '../../../components/cards/Cards';
import './Dashboard.scss';
import Chart from 'react-apexcharts';

const chartOptions = {
    series: [
        {
            name: 'Online Customers',
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
        },
        {
            name: 'Store Customers',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
        },
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        legend: {
            position: 'top',
        },
        grid: {
            show: false,
        },
    },
};
function Dashboard() {
    return (
        <div className="dashboard ">
            <h3>Dashboard</h3>
            <Cards />
            <div className="dasboard-chart row">
                <Chart
                    className="col-12"
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="line"
                    height="100%"
                />
            </div>
        </div>
    );
}

export default Dashboard;
