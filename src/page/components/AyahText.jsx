import React, { Component } from "react";

class AyahText extends Component {
  render() {
    const { arabicText, translation } = this.props;
    return (
      <>
        <div className="flex text-3xl font-semibold text-green-900 mb-5 mt-10 justify-center">
          {arabicText}
        </div>
        <div className="flex text-lg text-green-700 mb-4 italic justify-center">
          {translation}
        </div>
      </>
    );
  }
}

export default AyahText;
