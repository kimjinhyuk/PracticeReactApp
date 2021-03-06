import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();
  }
  render() {
    const json = {
      "title": "코로나19 음성수집",
      "description": "여러분의 목소리가 코로나19 진단에 큰 도움이 됩니다",
      "logo": "https://surveyjs.io/favicon.ico",
      "logoWidth": 60,
      "logoHeight": 60,
      showQuestionNumbers: "off",
      questions: [
        {
          type: "radiogroup",
          name: "sex",
          title: "성별",
          isRequired: true,
          choices: ["남", "여"],
          colCount: 0,
        },
        {
          type: "dropdown",
          name: "age",
          title: "나이",
          // visibleIf: "{haveKids}='Yes'",
          startWithNewLine: false,
          isRequired: true,
          choicesMax: 100,
        },
        {
          type: "radiogroup",
          name: "CovidTestExperience",
          title: "코로나19 테스트를 한적이 있습니까",
          choices: ["지난 테스트 양성 ", "지난 테스트 음성","테스트를 받은 적이 없습니다"],
          isRequired: true,
          startWithNewLine: true,
        },
        {
          type: "radiogroup",
          name: "WearMask",
          title: "마스크를 착용 하고 있습니까 ? ",
          isRequired: true,
          choices: ["네", "아니요"],
          startWithNewLine: false,
          colCount: 0,
        },
        {
          type: "checkbox",
          name: "symptom",
          title: "갖고 있는 증상",
          hasOther: true,
          choices: ["감기", "기침","열","호흡곤란","인후통","근육통","피곤함","폐렴","후각/미각 상실","흡연","천식","만성폐질환","고혈압","심근경색","당뇨","설사","해당없음"],
          isRequired: true,
          startWithNewLine: true,
          choicesMax: 16,
          "colCount": 4
        },
        {
          type: "dropdown",
          name: "address",
          title: "사는 지역을 선택 해 주세요",
          isRequired: true,
          choicesMax: 3,
          choicesByUrl: {
            url: "https://restcountries.eu/rest/v2/all",
            valueName: "name"
          }
        }
      ],
    };
    const survey = new Survey.Model(json);

    return <Survey.Survey model={survey} />;
  }
}

export default SurveyComponent;
