import FormContainer from './form-container.jsx'
import { useState } from 'react'

export default function App() {
    const [cvData, setCvData] = useState("");
    const getCvData = (data) => {
    setCvData(data);
    console.log(data);
    }

    return (
        <main>
            <FormContainer sendCvData={getCvData}></FormContainer>
            <div className="csvContainer"></div>
        </main>
    );
}