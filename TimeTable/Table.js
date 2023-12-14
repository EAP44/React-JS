import { useState } from "react";
import Group207 from "./Group207.json";
import Group208 from "./Group208.json";
import Group209 from "./Group209.json";
export default function Table() {
  const groups = [
    { group: "DEVOWFS 207", value: "DEVOWFS 207" },
    { group: "DEVOWFS 208", value: "DEVOWFS 208" },
    { group: "DEVOWFS 209", value: "DEVOWFS 209" },
  ];
  const [table,settable] = useState(Group207)
  return (
    <>
      <div class="container p-3 my-3 mt-5 bg-darck shadow d-flex flex-column justify-content-between align items-center">
        <h2 className="text-center text-primary">Emploi tu temps</h2>
        <p className="text-center">NTIC Rabat</p>
        <div className="d-flex justify-content-center"></div>
        <table class="table table-bordered mt-4">
          <thead>
            <tr>
              <th className="">
                <select
                  className="form-control text-center"
                  onChange={(i) => {
                    if (i.target.value === "DEVOWFS 207") {
                       settable(Group207)
                    }
                    else if (i.target.value === "DEVOWFS 208"){
                      settable(Group208)
                    }
                    else if (i.target.value === "DEVOWFS 209"){
                      settable(Group209)
                    }
                  }}
                >
                  {groups.map((e) => {
                    return <option value={e.value}>{e.group}</option>;
                  })}
                </select>
              </th>
              <th className="text-center table-primary">08:30 | 11:00</th>
              <th className="text-center table-primary">11:00 | 13:30</th>
              <th className="text-center table-primary">13:30 | 16:00</th>
              <th className="text-center table-primary">16:00 | 18:30</th>
            </tr>
          </thead>

          <tbody>
            {table.map((e) => {
              return (
                <tr>
                  <th className="text-center table-primary">{e.jour}</th>
                  <td className={e.S1.className}>{e.S1.inner}</td>
                  <td className={e.S2.className}>{e.S2.inner}</td>
                  <td className={e.S3.className}>{e.S3.inner}</td>
                  <td className={e.S4.className}>{e.S4.inner}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
