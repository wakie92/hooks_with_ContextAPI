import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Layout>
      <p>TODO LIST</p>
    </Layout>
  );
}

const Layout = styled.div`
  width : 400px;
  height: 600px;
  background-color: beige;
  text-align: center;
  margin : 0;
  font-size: 30px;
  font-weight: bolder;
  padding : 20px;
  }
`;

export default App;