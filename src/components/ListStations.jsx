import React, { useEffect, useState } from "react";
import ListForm from "./ListForm";
import api from "../services/api";

function ListStations() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.auth.stations();
        const data = await response.data;
        setStations(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const deleteStation = async (id) => {
    try {
      await api.auth.deleteStation(`${id}`);
    } catch (error) {
      console.log(error);
    }
    setStations(
      stations.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const editStation = async (edit, input) => {
    setStations(
      stations.map((item) => {
        if (item.id === edit.id) {
          return { ...item, ...input };
        }
        return item;
      })
    );
    try {
      await api.auth.patchStation(`${edit.id}`, {
        ...edit,
        ...input,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createStation = async (input) => {
    try {
      await api.auth.createStation(input);
      const response = await api.auth.stations();
      const data = await response.data;
      setStations(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ListForm
        items={stations}
        handleCreate={createStation}
        handleEdit={editStation}
        title="Station"
        handleDelete={deleteStation}
      />
    </div>
  );
}

export default ListStations;
