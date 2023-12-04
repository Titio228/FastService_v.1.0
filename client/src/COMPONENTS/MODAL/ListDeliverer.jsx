import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import ListDelivererDisplay from "../LIST/LIST_DELIVERER/ListDeliverer";

export default function ModalDeliverer() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Liste des livreurs"
        icon="pi pi-external-link"
        style={{
          width: "220px",
          color: "black",
          backgroundColor: "#55efc4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          lineHeight: "3rem",
        }}
        className="h-3rem hover:bg-green-200"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Livreurs disponibles"
        visible={visible}
        style={{ width: "90vw" }}
        onHide={() => setVisible(false)}
      >
        <ListDelivererDisplay />
      </Dialog>
    </div>
  );
}
