import CenterLayout from "../../layouts/center-layout";
import { useTranslation } from "react-i18next";
import ExplodingButton from "../../components/ui/exploding-button";

function Page() {
    const { t } = useTranslation();

    return (
        <CenterLayout>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{t("dataStructuresVisualization")}</h1>
                <p className="text-lg text-gray-700 mb-8">{t("exploreAndManipulateDataStructures")}</p>
                <div className="flex justify-center space-x-4 mb-8">
                    <ExplodingButton variant="primary">{t("push")}</ExplodingButton>
                    <ExplodingButton variant="secondary">{t("pop")}</ExplodingButton>
                    <ExplodingButton variant="success">{t("shift")}</ExplodingButton>
                    <ExplodingButton variant="accent">{t("reverse")}</ExplodingButton>
                </div>
                <p className="text-gray-600">{t("moreDataStructuresComingSoon")}</p>
            </div>
        </CenterLayout>
    );
}

export default Page;
