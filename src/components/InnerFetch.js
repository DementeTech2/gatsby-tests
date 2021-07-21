import * as React from "react";
import useSWR from 'swr'
import fetcher from "../utils/fetcher";

function InnerFetch (props) {

    let [delay, setDelay] = React.useState(0);
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/2?_delay=' + delay, fetcher, { initialData: props.post} )

    React.useEffect(
        () => {
          let timer1 = setTimeout(() => setDelay(2000), 1000);
          return () => {
            clearTimeout(timer1);
          };
        },
        []
      );

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    // render data
    return <div>{data.id === 2 ? "Not Ok": "NotOk"}</div>
}

export default InnerFetch;