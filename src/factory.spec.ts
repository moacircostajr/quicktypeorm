import CoreClass from './core/core_class'
import CoreContent from './core/core_content'
import CoreLesson from './core/core_lesson'
import CoreStudent from './core/core_student'
import Factory from './factory'

describe('Factory', () => {
  test('if FACTORY returns instance of CoreClass', () => {
    const coreClass: CoreClass = Factory.getNewCoreClass()
    expect(coreClass).toEqual(new CoreClass())
  })
  test('if FACTORY returns instance of CoreContent', () => {
    const coreContent: CoreContent = Factory.getNewCoreContent()
    expect(coreContent).toEqual(new CoreContent())
  })
  test('if FACTORY returns instance of CoreLesson', () => {
    const coreLesson: CoreLesson = Factory.getNewCoreLesson()
    expect(coreLesson).toEqual(new CoreLesson())
  })
  test('if FACTORY returns instance of CoreStudent', () => {
    const coreStudent: CoreStudent = Factory.getNewCoreStudent()
    expect(coreStudent).toEqual(new CoreStudent())
  })
})
