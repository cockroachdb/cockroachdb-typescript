import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface Leader {
    id: number,
    name: string,
    score: number
}

function renderLeader(leader: Leader) {
    return <tr key={leader.id}>
        <td>{leader.name}</td>
        <td>{leader.score}</td>
    </tr>
}

export default function Leaderboard() {

    const [leaders, setLeaders] = useState([] as Leader[]);

    useEffect(() => {
        fetch('/.netlify/functions/getScores')
            .then(response => response.json() as Promise<Leader[]>)
            .then(data => setLeaders(data));
    }, []);

    return <>
        <h2>Leaderboard</h2>
        {leaders.length === 0 ? 
            <div>No leader scores to display. Would you like to <Link to="admin">add one</Link>?</div>
        :
            <table className="table leader-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.map(l => renderLeader(l))}
                </tbody>
            </table>
        }
    </>
}

