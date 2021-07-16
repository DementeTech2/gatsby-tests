
import * as React from "react"
import Layout from "../components/Layout";

export default function Home() {

  const [dummyList, setDummy] = React.useState([]);

  React.useEffect(() => {
    const interval = setTimeout(() => setDummy(["Lazy Test 1", "Lazy Test 2", "Lazy Test 3"]), 3000);
    return function cleanup() {
      clearInterval(interval)
    };
  });

  return (
    <Layout>
      <main id="index_main" className="app" >
        <h1> Index Page </h1>
        <table id="index_table" style={{width:"100%"}}>
          <tbody>
            <tr>
              <td>Normal Change</td>
              <td className="normal_change" >Not Ok</td>
            </tr>
            <tr>
              <td>Class Change</td>
              <td className="class_change preNot">Ok</td>
            </tr>
            <tr>
              <td>Remove Change</td>
              <td ><span className="remove_change">Not</span> Ok</td>
            </tr>

            {dummyList.map((value, index) => {
              return (
                <tr key={index} className="lazy_change">
                  <td>{value.toString()}</td>
                  <td >Not Ok</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </Layout>
  )
}
