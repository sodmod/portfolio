import {resume_path} from "../data/data.js";

export const handleClick = (url) => {
  window.open(url, '_blank');
}

export const handleDownloadClick = () => {
  const link = document.createElement('a');
  link.href = resume_path;
  link.download = 'Badmus_Sodiq_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}