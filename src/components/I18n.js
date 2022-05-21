import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ja: {
    translation: {
      // Profile
      1: "最大限自分に責任を持つ為に独立しました。",
      5: "目標は世界中で使われるサービスを作ることです。",
      6: "学習中...",
      // Career
      a: "関西大学 総合情報学部 卒業",
      b: "都内AI開発ベンチャー",
      c: "機械学習エンジニア職 入社",
      e: "独立",
      // Modal
      prihigh: "優先度：高",
      primid: "優先度：中",
      prilow: "優先度：低",
      block: "ブロックチェーン開発周り",
      blockdes: "(切望案件ですが実務経験無しです)",
      webdev: "Webアプリケーション開発",
      webdevdes1: "(フロント",
      webdevdes2: "バック",
      // webdevdes1: "(フロントエンド..React バックエンド..Python)",
      tool: "簡単なツール作成",
      tooldev: "(サクッと自動化・効率化できます)",
      website: "Webサイト作成",
      websitedes: "(可愛いサイトは作れないです)",
    },
  },
  en: {
    translation: {
      // Profile
      1: "I became independent in order to take maximum responsibility for myself.",
      5: "My goal is to create a service that is used around the world.",
      6: "Learning...",
      // Career
      a: "Graduated from Kansai University, Faculty of Informatics",
      b: "Joined an AI development venture in Tokyo",
      c: "as a machine learning engineer.",
      e: "Freelance Engineer",
      // Modal
      block: "Blockchain Development",
      prihigh: "Priority: High",
      primid: "Priority: Medium",
      prilow: "Priority: Low",
      blockdes: "(Coveted project, but no work experience)",
      webdev: "Web Application Development",
      webdevdes1: "(Front End",
      webdevdes2: "(Back End",
      tool: "Create simple tool",
      tooldev: "(Quickly automated and streamlined)",
      website: "Web Design",
      websitedes: "(Can't make a pretty site.)",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
});

export default i18n;
