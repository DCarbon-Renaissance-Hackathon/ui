import { DeviceDetail } from '@/reducers/deviceSlice'

type ProjectDescriptionProps = {
  deviceInfo?: DeviceDetail
}

const ProjectDescription = ({ deviceInfo }: ProjectDescriptionProps) => {
  return <div>{deviceInfo?.projectInfo?.descs[0]?.desc}</div>
}

export default ProjectDescription
