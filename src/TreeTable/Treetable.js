import React from 'react';

class TreetableValue extends React.Component {
   render() {
      return (
        <div>
        {JSON.stringify(process.env.REACT_APP_API_KEY)}
    </div>
      );
   }
}
export default TreetableValue;