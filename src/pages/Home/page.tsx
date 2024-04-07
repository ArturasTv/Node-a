import CenterLayout from "../../layouts/center-layout";
import { useTranslation } from "react-i18next";

function Page() {
    const { t } = useTranslation();

    return (
        <CenterLayout>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{t("dataStructuresVisualization")}</h1>
                <p className="text-lg text-gray-700 mb-8">{t("exploreAndManipulateDataStructures")}</p>
                <div className="flex justify-center space-x-4 mb-8">
                    <div className="btn btn-primary">{t("push")}</div>
                    <div className="btn btn-secondary">{t("pop")}</div>
                    <div className="btn btn-success">{t("shift")}</div>
                    <div className="btn btn-accent">{t("reverse")}</div>
                </div>
                <p className="text-gray-600">{t("moreDataStructuresComingSoon")}</p>
            </div>
        </CenterLayout>
    );
}

export default Page;
