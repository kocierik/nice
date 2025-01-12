import { LineSchedule, TransportData, TransportTime } from "@/interface"
import { useEffect, useState } from "react"

const TableUI = () => {
    const [tramData, setTramData] = useState<TransportData[]>()
    const [timeRemaining, setTimeRemaining] = useState<number>(5) 

    const fetchTramData = async () => {
        try {
            const response = await fetch('https://api.rla2.cityway.fr/media/api/v1/fr/Schedules/LogicalStop/3522/NextDeparture?lineId=&direction=')
            const data = await response.json()
            setTramData(data)
            setTimeRemaining(5) 
        } catch (error) {
            console.error("Error fetching tram data:", error)
        }
    }

    useEffect(() => {
        fetchTramData()
        const interval = setInterval(async () => {
            await fetchTramData()
        }, 5000) 
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (timeRemaining > 0) {
            const countdownInterval = setInterval(() => {
                setTimeRemaining(prevTime => prevTime - 1)
            }, 1000) 

            return () => clearInterval(countdownInterval)
        }
    }, [timeRemaining])

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🚋 Orari Tram in Tempo Reale</h1>
            <p style={styles.caption}>
                Aggiornato tra {timeRemaining} secondi
            </p>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.headerRow}>
                        <th style={styles.headerCell}>Linea</th>
                        <th style={styles.headerCell}>Minuti Mancanti</th>
                        <th style={styles.headerCell}>Orario Effettivo</th>
                    </tr>
                </thead>
                <tbody>
                    {tramData ? (
                        tramData[0].lines.map((item: LineSchedule, i: number) => (
                            <tr key={i} style={styles.row}>
                                <td style={styles.cell}>
                                    <span style={styles.badge}>{item.line.number}</span> direzione{" "}
                                    <strong>{item.direction.name}</strong>
                                </td>
                                <td style={styles.cell}>
                                    {item.times.map((tram: TransportTime, index) => (
                                        <span key={index} style={styles.highlight}>
                                            +{tram.timeDifference}{" "}
                                        </span>
                                    ))}
                                </td>
                                <td style={styles.cell}>
                                    {item.times.map((tram: TransportTime, index) => (
                                        <span
                                            key={index}
                                            style={{ ...styles.time, ...styles.time3D }}
                                        >
                                            {tram.realDateTime?.slice(11, 16)}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>
                                Nessun dato disponibile
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const styles = {
    container: {
        fontFamily: "'Arial', sans-serif",
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "black",
        textAlign: "center" as const,
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "white",
        marginBottom: "10px",
    },
    caption: {
        fontSize: "14px",
        color: "#7f8c8d",
        marginBottom: "20px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse" as const,
        marginBottom: "20px",
    },
    headerRow: {
        backgroundColor: "#34495e",
        color: "#fff",
    },
    headerCell: {
        padding: "10px",
        fontWeight: "bold",
        fontSize: "16px",
    },
    row: {
        transition: "background-color 0.2s ease",
    },
    cell: {
        padding: "10px",
        borderBottom: "1px solid #bdc3c7",
        fontSize: "14px",
    },
    badge: {
        display: "inline-block",
        padding: "5px 10px",
        color: "black",
        borderRadius: "4px",
        fontWeight: "bold",
        marginRight: "5px",
    },
    highlight: {
        fontWeight: "bold",
        color: "#e67e22",
    },
    time: {
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "16px",
        color: "#2980b9",
    },
    time3D: {
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    noData: {
        textAlign: "center",
        padding: "20px",
        fontSize: "16px",
        color: "#95a5a6",
    },
}

export default TableUI
