import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const Counter = () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const currentCount = localStorage.getItem("visitCount");
        if (currentCount) {
            const newCount = parseInt(currentCount) + 1;
            setVisitCount(newCount);
            localStorage.setItem("visitCount", newCount);
        } else {
            setVisitCount(1);
            localStorage.setItem("visitCount", 1);
        }
    }, []); // ✅ Empty dependency array ensures it runs only once on mount

    return (
        <Container className='mt-5'>
            <Card>
                <Card.Body> {/* ✅ Fixed 'body' class issue */}
                    <Card.Title>Live Visitor Count</Card.Title>
                    <Card.Text>This page has been visited <strong>{visitCount}</strong> times.</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Counter;
