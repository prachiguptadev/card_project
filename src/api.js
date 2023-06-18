const api = (data) => {
    console.log(data);
    return `https://placehold.co/600x400/${data.color.slice(1)}/0a0a0a.mp4?text=${
      data.name
    }&font=${data.font}`;
  };
  
  export default api;
  