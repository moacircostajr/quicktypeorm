import CoreClass from './core/core_class'
import CoreContent from './core/core_content'
import CoreLesson from './core/core_lesson'
import CoreStudent from './core/core_student'

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
