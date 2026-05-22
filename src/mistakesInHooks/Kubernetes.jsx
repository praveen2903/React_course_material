import deploymentImg from '../assets/deployment_walkthrough.jpeg'
import deploymentCloud from '../assets/gcp_cloud.png'
import kubernetesImg from '../assets/kubernetes.png'
import kubernetesSnippets from '../assets/kubernetes_snippets.jpeg'
import kubernetesDocker from '../assets/kubernetes_docker.png'
import cloudBackend from '../assets/cloud_in_backend.png'
import cloudServices from '../assets/cloud_services.png'
import cloudFlare from '../assets/clouldflare_usage.png'

function ImageBanner() {
  const images = [
    deploymentImg,
    deploymentCloud,
    kubernetesDocker,
    kubernetesImg,
    kubernetesSnippets,
    cloudBackend,
    cloudFlare,
    cloudServices
  ];

  return (
    <div>

      <div>
        {images.map((img, index) => (
          <div
            key={index}
          >
            <img
              src={img}
              alt="graphql"
              height={'1000px'}
              width={'1000px'}
              style ={{marginBottom:'32px'}}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
const Kubernetes = () => {
  return (
    <div>Kubernetes
        <ImageBanner/>
    </div>
  )
}

export default Kubernetes