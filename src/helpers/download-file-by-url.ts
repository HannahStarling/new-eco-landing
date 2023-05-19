export const downloadFileByUrl = (url: string, fileName?: string) => {
  const link = document.createElement('a');
  link.download = fileName || '';
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
