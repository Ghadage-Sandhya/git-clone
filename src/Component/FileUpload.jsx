import React, { useState } from 'react';
import * as XLSX from 'xlsx'; // Updated import
import Dropzone from 'react-dropzone';

function FileUpload() {
  const [excelData, setExcelData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setExcelData(jsonData);
      };

      reader.readAsBinaryString(selectedFile);
    }
  };

  const filteredData = excelData.filter((row) =>
    row.some((cell) =>
      String(cell).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        // style={{ display: 'none' }}
        placeholder="ChooseFile"
        id="fileInput"
      />
      {/* <label htmlFor="fileInput">
        <button type="button">Choose Excel File</button>
      </label> */}
      <button type="button" onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredData.length > 0 && (
        <table>
          <thead>
            <tr>
              {excelData[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FileUpload;
