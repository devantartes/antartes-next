import {
  ArrowRight02Icon,
  Building02Icon,
  CheckListIcon,
  Rocket,
  TestTube01Icon,
  WebDesign01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ServiceDevelopmentProcess() {
  return (
    <div className="mx-20 my-20 px-20 py-20 bg-black text-white rounded-4xl">
      <div className="flex gap-10 items-center justify-between flex-col md:flex-row ">
        <div className="text-center space-y-2">
          <HugeiconsIcon icon={CheckListIcon} size={80} />
          <p>Plan</p>
        </div>
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={30}
          className="rotate-90 md:rotate-0"
        />
        <div className="text-center space-y-2">
          <HugeiconsIcon
            icon={WebDesign01Icon}
            size={80}
            className="rotate-90 md:rotate-0"
          />
          <p>Design</p>
        </div>
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={30}
          className="rotate-90 md:rotate-0"
        />
        <div className="text-center space-y-2">
          <HugeiconsIcon icon={Building02Icon} size={80} />
          <p>Build</p>
        </div>
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={30}
          className="rotate-90 md:rotate-0"
        />
        <div className="text-center space-y-2">
          <HugeiconsIcon icon={TestTube01Icon} size={80} />
          <p>Test</p>
        </div>
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={30}
          className="rotate-90 md:rotate-0"
        />
        <div className="text-center space-y-2">
          <HugeiconsIcon icon={Rocket} size={80} />
          <p>Launch</p>
        </div>
      </div>
      <p className="text-center text-white/45 text-[14px] mt-20">
        Each step is carefully managed to ensure strong performance, secure
        architecture, and long-term scalability, allowing your mobile
        application to grow smoothly as user demands and business needs evolve.
      </p>
    </div>
  );
}
