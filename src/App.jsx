import { Global } from "@emotion/react";
import { GlobalStyle } from "./styles/GlobalStyle";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MainRoutes from "./routes/MainRoutes";

function App() {

  return (
    <>
      <Global styles={GlobalStyle} />
      <MainLayout>
        <MainRoutes />
      </MainLayout>
    </>
  )
}

export default App;