import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h1>The Home Page</h1>
        <Link to="/another-page">Another Page</Link>
        <p>
          Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla
          non metus auctor fringilla. Maecenas faucibus mollis interdum.
          Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor.
        </p>

        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Curabitur blandit tempus porttitor.
          Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
          amet risus.
        </p>

        <p>
          Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.
          Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.
        </p>
      </div>
    </div>
  );
};

export default Home;
