import "./style/app.css";
import Button from "./components/Button.jsx"
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
       <h1>Buttons</h1>
       <section className="variants">
        <div className="button-sample">
          <p>&#60;Button /&#62;</p>
          <Button />
        </div>
        <div className="button-sample">
          <p>&#60;Button variant=&#34;outline&#34; /&#62;</p>
          <Button variant="outline" />
        </div>
        <div className="button-sample">
          <p>&#60;Button variant=&#34;text&#34; /&#62;</p>
          <Button variant="text" />
        </div>
       </section>
       <section className="sizes">
          <div className="button-sample">
            <p>&#60;Button size=&#34;sm&#34; /&#62;</p>
            <Button size="sm" />
          </div>
          <div className="button-sample">
            <p>&#60;Button size=&#34;md&#34; /&#62;</p>
            <Button size="md" />
          </div>
          <div className="button-sample">
            <p>&#60;Button size=&#34;lg&#34; /&#62;</p>
            <Button size="lg" />
          </div>
       </section>
       <section className="colors">
          <div className="button-sample">
            <p>&#60;Button color=&#34;default&#34; /&#62;</p>
            <Button color="default" />
          </div>
          <div className="button-sample">
            <p>&#60;Button color=&#34;primary&#34; /&#62;</p>
            <Button color="primary" />
          </div>
          <div className="button-sample">
            <p>&#60;Button color=&#34;secondary&#34; /&#62;</p>
            <Button color="secondary" />
          </div>
          <div className="button-sample">
            <p>&#60;Button color=&#34;danger&#34; /&#62;</p>
            <Button color="danger" />
          </div>
       </section>

       <section className="disableShadow">
          <div className="button-sample">
            <p>&#60;Button disableShadow /&#62;</p>
            <Button disableShadow />
          </div>
        
       </section>
       
       <section className="icons">
          <div className="button-sample">
            <p>&#60;Button startIcon=&#34;add_circle&#34; /&#62;</p>
            <Button startIcon="add_circle" />
          </div>
          <div className="button-sample">
            <p>&#60;Button endIcon=&#34;shopping_cart&#34; /&#62;</p>
            <Button endIcon="shopping_cart" />
          </div>
       </section>

       <section className="disabled">
          <div className="button-sample">
            <p>&#60;Button disabled /&#62;</p>
            <Button disabled />
          </div>
       </section>
      <Footer />
    </>
  )
}

export default App
