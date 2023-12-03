import { Card } from "antd";
import Form from "./Form";
import Table from "./Table";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Collapse from "./Collapse";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Builder() {
  const createLayoutItem = (id, overrides = {}) => ({
    i: id,
    ...basic,
    ...overrides,
  });

  const basic = {
    x: 0,
    y: 0,
    w: 6,
    h: 2,
    resizeHandles: ["e", "w", "n", "s"],
  };

  const layout = [
    createLayoutItem("header-1", { w: 12 }),
    createLayoutItem("sidebar-1", { w: 2, h: 20 }),
    createLayoutItem("table-1", { x: 6, w: 10, y: 1, h: 4 }),
    createLayoutItem("form-1", { w: 5, h: 5 }),
    createLayoutItem("collapse-1", { x: 2, w: 5, h: 5 }),
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1350}
    >
      <div key="header-1">
        <Header />
      </div>
      <div key="sidebar-1">
        <Sidebar />
      </div>
      <div key="table-1">
        <Table />
      </div>
      <div key="form-1">
        <Form />
      </div>
      <div key="collapse-1">
        <Collapse />
      </div>
    </GridLayout>
  );
}
