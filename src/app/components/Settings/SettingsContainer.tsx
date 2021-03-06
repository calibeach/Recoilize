import React from 'react';

// Importing various settings components
import StateSettings from './StateSettings';
import ThrottleSettings from './ThrottleSettings';
import AtomSettings from './AtomSettings';

// renders the difference between the most recent state change and the previous
const Settings: React.FC = () => {
  return (
    <div className="Settings">
      <AtomSettings />
      <StateSettings />
      <ThrottleSettings />
    </div>
  );
};

export default Settings;
