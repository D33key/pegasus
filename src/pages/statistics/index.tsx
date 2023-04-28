import Layout from "@/components/Layout";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import cl from "./Statistics.module.css";

Chart.register(ArcElement, Tooltip, Legend);

const chartData = {
    labels: ["Работа", "Командировка", "Посещение друзей"],
    datasets: [
        {
            label: "",
            data: [3591, 512, 1040],
            backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const Demographic = () => {
    return (
        <Layout>
            <div>
                <div className="top-content-page">
                    Социально-демографические характеристики
                </div>
                <div className={cl.wrapper}>
                    <div className={`${cl.filter} ${cl.margin}`}>Filter</div>
                    <div className={`${cl.charts} ${cl.margin}`}>
                        <div className={cl.pieChart}>
                            <Doughnut data={chartData} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Demographic;
