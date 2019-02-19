import Router from 'next/router'
import Link from 'next/link'
export default () => (
  <div>
    <p>This is the about page</p>
    <button onClick={()=>{Router.push("/index")}} >返回首页</button >
    <Link href="/"><span>返回首页</span></Link>
  </div>
)

