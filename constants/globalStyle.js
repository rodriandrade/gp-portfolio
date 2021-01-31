import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif; 
  scroll-behavior: smooth;
}

h1{
  font-size:48px;
}

.my-masonry-grid {
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  margin-left: -30px;
  width: auto;
}

.my-masonry-grid_column {
  padding-left: 30px; 
}

.my-masonry-grid_column > div { 
  margin-bottom: 40px;
}

.my-masonry-grid-streamings {
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  //margin-left: -30px; 
  width: 100%;
  justify-content: space-around;
}

.my-masonry-grid-streamings_column {
  //padding-left: 30px; 
  background-clip: padding-box;
}

.my-masonry-grid-streamings_column > div { 
  margin-bottom: 60px;
}

.my-masonry-grid-streamings_column:nth-child(2) {
  margin-left:56px;
}

.my-masonry-grid-streamings_column:nth-child(3) {
  margin-left:56px;
}

a{
  text-decoration:none;
  color:black;
}

* {
  box-sizing: border-box;
}

@media (max-width: 480px) {

  // CONTENIDO MULTIMEDIA //

  .my-masonry-grid {
    width: 82%;
    margin:0 auto;
  }
  .my-masonry-grid_column {
    width:82%;
    margin:0 auto;
    padding-left:0;
  }
  .my-masonry-grid_column > div {
    width:100%;
  }

  // PRODUCCIÓN Y DIRECCIÓN DE STREAMING //

  .my-masonry-grid-streamings {
    width: 82%;
    margin:0 auto;
  }

  .my-masonry-grid-streamings_column {
    width:82%;
    margin:0 auto;
    padding-left:0;
  }
  .my-masonry-grid-streamings_column > div {
    width:100%;
  }
}

`; 
export default GlobalStyle;
