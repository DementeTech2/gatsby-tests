/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import * as React from "react"
import Layout from "../components/Layout";
import InnerFetch from '../components/InnerFetch';
import useInterval from "../utils/use_interval";
import fetcher from "../utils/fetcher";

export async function getStaticProps() {
  const post = await fetcher('https://jsonplaceholder.typicode.com/posts/1')
  return { props: { post } }
}

export default function About(props) {

  let [dummyList, setDummy] = React.useState([]);
  let [notOk, setNotOk] = React.useState("Not Ok");
  let [count, setCount] = React.useState(0);
  let [delay, setDelay] = React.useState(1000);

  useInterval(()=> {
    setNotOk("Not Ok")
  }, 1500);


  useInterval(()=> {
    const newList = [`Lazy test ${count}`, ...dummyList];
    setDummy(newList);
    setCount(count + 1);
    if(count>2) {
      setDelay(null);
    }
  }, delay);

  const dummyFunction = (ev) => console.log(ev.target);

  return (
    <Layout>
      <main id="index_main" className="app" >
        <h1> About Page </h1>
        <table id="about_table" style={{width:"100%"}}>
          <tbody>
            <tr>
              <td>Normal Change</td>
              <td onClick={dummyFunction} className="normal_change" >Not Ok</td>
            </tr>
            <tr>
              <td>Class Change</td>
              <td onClick={dummyFunction} className="class_change preNot">Ok</td>
            </tr>
            <tr>
              <td>Remove Change</td>
              <td onClick={dummyFunction}><span className="remove_change">Not</span> Ok</td>
            </tr>
            <tr>
              <td>Rearrange Change <span className="rearrange_piece">Ok</span></td>
              <td onClick={dummyFunction} className="rearrange_change"></td>
            </tr>
            <tr>
              <td>Insert Change</td>
              <td onClick={dummyFunction} className="insert_change"></td>
            </tr>
            {dummyList.map((value, index) => (
                <tr key={index} className="lazy_change">
                  <td>{value}</td>
                  <td onClick={dummyFunction} className={`lazy_index_${index}`}>Not Ok</td>
                </tr>
            ))}
            <tr>
              <td>Using Static Fetch</td>
              <td onClick={dummyFunction} className="static_change"><InnerFetch post={props.post}></InnerFetch></td>
            </tr>
            <tr>
              <td>Refreshing Content</td>
              <td onClick={dummyFunction} className="refresh_change">{notOk}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </Layout>
  )
}
