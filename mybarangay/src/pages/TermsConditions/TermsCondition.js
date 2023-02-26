import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './style.scss';
import CKEditor from "react-ckeditor-component";
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Button from "../../components/Form/Button";
import { postData, getData } from "../../api";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
const TermsCondition = ({ whichPrivacy, editData, onclose }) => {
  const data = {
    user: {
      _id: "",
      name: "",
      email: "",
    },
    slug: {
      mvd_for_video: "",
      mvd_for_playlist: "",
      mvd_for_categories: "",
      mvd_for_ivideo: "",
      user: {
        term_and_condition: "",
        privacy_policy: "",
      },
      creator: {
        term_and_condition: "",
        privacy_policy: "",
      },
    },
  };
  const [commonData, setCommonData] = useState(data);
  const [content, setContent] = useState("");
  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  let config = {
    toolbarGroups: [
      // { name: "document", groups: ["mode", "document", "doctools"] },
      // {
      //   name: "editing",
      //   groups: ["find", "selection", "spellchecker", "editing"]
      // },
      { name: "forms", groups: ["forms"] },
      { name: "basicstyles", groups: ["basicstyles", "cleanup","colors"] },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi", "paragraph", "colors"]
      },
      "/",
      // { name: "links", groups: ["links"] },
      // { name: "insert", groups: ["insert"] },
      // { name: "styles", groups: ["styles"] },
      // { name: "colors", groups: ["colors"] },
      // { name: "tools", groups: ["tools"] },
      // "/",
      // { name: "clipboard", groups: ["clipboard", "undo"] },
      // { name: "others", groups: ["others"] },
      // { name: "about", groups: ["about"] }
    ],
    removeButtons:
      "Save,NewPage,Preview,Print,Cut,Copy,Paste,PasteText,PasteFromWord,Find,SelectAll,Scayt,Replace,Form,Checkbox,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,BidiLtr,BidiRtl,Language,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,ShowBlocks,About,CopyFormatting,Undo,Redo",
    fontSize_sizes: "16/16px;24/24px;48/48px;",
    font_names:
      "Arial/Arial, Helvetica, sans-serif;" +
      "Times New Roman/Times New Roman, Times, serif;" +
      "Verdana",
    allowedContent: true,
    disableNativeSpellChecker: false
    // skin: "moono",
    // plugins:
    //   "dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,popup,filetools,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc"
  };
  const onChange = (evt) => {
    var newContent = evt.editor.getData();
    
    setContent(newContent);
    if (whichPrivacy === "user") {
      setCommonData((prev) => ({
        ...prev,
        slug: {
          ...prev.slug,
          user: {
            ...prev.slug.user,
            term_and_condition: newContent,
          },
        },
      }));
    } else {
      setCommonData((prev) => ({
        ...prev,
        slug: {
          ...prev.slug,
          creator: {
            ...prev.slug.creator,
            term_and_condition: newContent,
          },
        },
      }));
    }
  };
  const getUserSetting = async () => {
    setInitLoading(true);
    const res = await getData("/admin-general-setting-view", {});
    if (res.status === 1) {
      setCommonData(res.data);
      if (whichPrivacy === "user") {
        setContent(res.data.slug.user.term_and_condition);
      } else {
        setContent(res.data.slug.creator.term_and_condition);
      }
      setInitLoading(false);
    } else if (res.statusCode === 422) {
      setInitLoading(false);
    } else {
      setInitLoading(false);
    }
  };
  const saveSettingClick = async () => {
    setLoading(true);

    const res = await postData("/admin-general-setting-save", {}, commonData);
    if (res.status === 1) {
      toast.success(res.message, { theme: "colored" });
      setLoading(false);
      onclose();
    } else if (res.statusCode === 422) {
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(res.message, { theme: "colored" });
    }
  };

  useEffect(() => {
    getUserSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cancelClick = () => {
    onclose(false);
  };
  return (
    <React.Fragment>
         <div className="terms-page">
            <h4 className="page_title">Legal & Documentation</h4>
            <div className="survey_data_wrapper">
                <nav className="custom_nav">
                    <ul >
                        <li>
                            <NavLink to="/termsConditions">Terms & Conditions</NavLink>
                        </li>
                         <li>
                            <NavLink to="/termsConditions1">Privacy Policy</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="survey_data">  
            <h4 className="tab-content-title">Terms & Conditions</h4>

                <CKEditor
                activeClass="p10"
                content={content}
                editor={ClassicEditor}
                config={config}
                data="<p>Hello from the first editor working with the context!</p>"
                events={{
                  change: onChange,
                }}
              />
                </div>
            </div>
      </div>
      {!initLoading && (
        <React.Fragment>
          {/* {editData && ( */}
            <React.Fragment>
              



              <div className="text-end mt-3">
                <Button
                  type="button"
                  className="btn-default text-blacksix me-3"
                  onClick={cancelClick}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={saveSettingClick}
                  disabled={loading}
                  loading={loading}
                  className="btn-primary text-white"
                >
                  Update
                </Button>
              </div>
            </React.Fragment>
          {/* )} */}
          {/* {!editData && (
            <div
              className="privacy-wrapper"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )} */}
        </React.Fragment>
      )}
      {initLoading && <Loader />}
    </React.Fragment>
  );
};

export default TermsCondition;
