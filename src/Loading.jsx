import { CircularProgress } from "@mui/material"

const Loading=()=>{
    return(
        <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 9,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
        <h3 style={{ marginLeft: 15 }}>Loading...</h3>
      </div>
    </div>
    )
}

export default Loading