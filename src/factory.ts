import CoreClass from "./core/CoreClass";
import CoreContent from "./core/CoreContent";
import CoreLesson from "./core/CoreLesson";
import CoreStudent from "./core/CoreStudent";

function getNewCoreClass(): CoreClass {
  return new CoreClass()
}

function getNewCoreStudent(): CoreStudent {
  return new CoreStudent()
}

function getNewCoreLesson(): CoreLesson {
  return new CoreLesson()
}

function getNewCoreContent(): CoreContent {
  return new CoreContent()
}

const Factory: any = {
  getNewCoreClass,
  getNewCoreStudent,
  getNewCoreLesson,
  getNewCoreContent
}

export default Factory