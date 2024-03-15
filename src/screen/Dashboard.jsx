import JSZip from 'jszip';
import '../ZipDownloader.css'
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {

  const zipFiles = [
    { name: 'example1.zip', files: [] },
    { name: 'example2.zip', files: [] },
    { name: 'example3.zip', files: [] },
    
  ]; // Array to hold zip file information
  
  const handleDownload = (files, fileName) => {
    const zip = new JSZip();

    files.forEach(file => {
      zip.file(file.name, file.content); // Add files to the zip
    });

    zip.generateAsync({ type: 'blob' }).then(content => {
      const element = document.createElement('a');
      const file = new Blob([content]);
      element.href = URL.createObjectURL(file);
      element.download = fileName;
      document.body.appendChild(element);
      element.click();
    });
  };
  return (
    <>
     <Navbar/>
    <div className="zip-downloader-container">
      <table className="zip-files-table">
        <thead>
          <tr>
          <th>#</th>
            <th>Zip File Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {zipFiles.map((zipFile, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
              <td>{zipFile.name}</td>
              <td>
                <button onClick={() => handleDownload(zipFile.files, zipFile.name)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Dashboard