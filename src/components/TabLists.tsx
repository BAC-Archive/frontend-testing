import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const TabLists: React.FC = () => {
  return(
    <Tabs variant='enclosed'>
      <TabList>
        <Tab>1 BAC</Tab>
        <Tab>2 BAC</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>TEST1</p>
        </TabPanel>
        <TabPanel>
          <p>Test2</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabLists;
