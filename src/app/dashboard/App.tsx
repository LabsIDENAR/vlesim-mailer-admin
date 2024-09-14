import React, { useState } from "react";
// Import your Layout component
import { Stack } from "@mui/material";
import Layout from "./layout";
import Sidebar from "./components/sidebar/SideBar";

const App: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);

  const handleItemClick = (content: React.ReactNode) => {
    setSelectedContent(content); // Update the selected content to display
  };

  return (
    <Layout>
      <Sidebar onItemClick={handleItemClick} />{" "}
      {/* Pass the handler to Sidebar */}
      <main style={{ flexGrow: 1, padding: "16px" }}>
        {/* Render the selected content */}
        <Stack spacing={2}>
          {selectedContent || <div>Select an item from the sidebar</div>}
        </Stack>
      </main>
    </Layout>
  );
};

export default App;
