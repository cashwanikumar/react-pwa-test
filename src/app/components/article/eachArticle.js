import React, { Component } from "react";

export default class EachArticle extends Component {
  render() {
    return (
      <div className="container">
        <div className="left_content">
          <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula, lacus justo semper libero, quis porttitor turpis odio sit amet ligula. Duis dapibus fermentum orci, nec malesuada libero vehicula ut. Integer sodales, urna eget interdum eleifend, nulla nibh laoreet nisl, quis dignissim mauris dolor eget mi. Donec at mauris enim. Duis nisi tellus, adipiscing a convallis quis, tristique vitae risus. Nullam molestie gravida lobortis. Proin ut nibh quis felis auctor ornare. Cras ultricies, nibh at mollis faucibus, justo eros porttitor mi, quis auctor lectus arcu sit amet nunc. Vivamus gravida vehicula arcu, vitae vulputate augue lacinia faucibus.</p>
          <blockquote> Donec volutpat nibh sit amet libero ornare non laoreet arcu luctus. Donec id arcu quis mauris euismod placerat sit amet ut metus. Sed imperdiet fringilla sem eget euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque adipiscing, neque ut pulvinar tincidunt, est sem euismod odio, eu ullamcorper turpis nisl sit amet velit. Nullam vitae nibh odio, non scelerisque nibh. Vestibulum ut est augue, in varius purus. </blockquote>
          <ul>
            <li>Nullam vitae nibh odio, non scelerisque nibh</li>
            <li>Nullam vitae nibh odio, non scelerisque nibh</li>
            <li>Nullam vitae nibh odio, non scelerisque nibh</li>
            <li>Nullam vitae nibh odio, non scelerisque nibh</li>
            <li>Nullam vitae nibh odio, non scelerisque nibh</li>
            <li>Nullam vitae nibh odio, non scelerisque nibh</li>
          </ul>
          <h2>This is h2 title</h2>
          <h3>This is h3 title</h3>
          <h4>This is h4 title</h4>
          <h5>This is h5 title</h5>
          <h6>This is h6 Title</h6>
        </div>
      </div>
    );
  }
}