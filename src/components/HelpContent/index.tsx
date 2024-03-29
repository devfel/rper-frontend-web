import React from 'react'
import {
  ContentWrapper,
  Title,
  Text,
  ImageWrapper,
  ReferencesText,
  ReferencesTitle,
  ReferencesWrapper,
} from './styles'
import communityDrawing from '../../assets/content-imgs/historical-mapping-community-drawning.jpg'
import communityOfficialMap from '../../assets/content-imgs/historical-mapping-community-official-map.jpg'
import communityAndMap from '../../assets/content-imgs/historical-mapping-community-and-map.jpg'
import transectWalkMap from '../../assets/content-imgs/transect-walk-map.jpg'
import transectWalkCommunity from '../../assets/content-imgs/transect-walk-community.jpg'
import constructionGroup from '../../assets/content-imgs/construction-group.jpg'
import constructionMaterials from '../../assets/content-imgs/construction-materials.jpg'
import themeFrameworkTeam from '../../assets/content-imgs/theme-framework-team.jpg'
import themeFrameworkTable from '../../assets/content-imgs/theme-framework-table.png'

// -------------------------------------------------- //
// ----------------- SECONDARY DATA ----------------- //
// -------------------------------------------------- //
export const SecondaryDataContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Secondary Data Collection</Title>

    <Text>
      Secondary data collection refers to the gathering of data that was
      previously collected by someone else, typically for a different purpose.
      This method of data collection can provide a rich source of information
      without the need for direct interaction with participants.
    </Text>

    <Text>
      <strong>Definition:</strong> Secondary data is data that has already been
      collected by another researcher or organization. Examples include census
      data, data from government reports, and data from previous research
      studies.
    </Text>

    <ImageWrapper>
      <img
        src="https://plus.unsplash.com/premium_photo-1661297441050-cd5f9980051d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Bar Chart illustrating secondary data"
      />
      <div className="tooltip">Bar Chart illustrating secondary data</div>
    </ImageWrapper>

    <Text>
      Some of the raw data, such as the secondary data obtained during the
      information collection, should first be organized and subsequently
      analyzed. When presented in tables, charts, graphs, figures, or models,
      the data can be summarized, and the provided information for analysis
      highlighted. The methodological process of RPER intervention follows a
      basic outline that starts with the formation and preparation of the
      interdisciplinary team. It then proceeds to precisely collect and
      systematize secondary information about the focused community and the
      historical context of the region in which it operates, which is what this
      stage refers to.
    </Text>

    <Text>
      <strong>Advantages:</strong> Using secondary data can save time and
      resources. Since the data has already been collected, researchers can skip
      the data collection phase and move directly to analysis.
    </Text>

    <Text>
      <strong>Limitations:</strong> One of the main limitations of secondary
      data is that it might not be perfectly tailored to the researcher`s needs.
      Additionally, there can be concerns about the accuracy and reliability of
      the data.
    </Text>

    <ImageWrapper>
      <img
        src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
        alt="Book representing data sourcing"
      />
      <div className="tooltip">Book representing data sourcing</div>
    </ImageWrapper>

    <Text>
      <strong>Types:</strong> There are various types of secondary data,
      including qualitative and quantitative data. It can be raw data or
      processed data.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Bardin, L. (2011). Content analysis. São Paulo: Edições, 70(279),
        978-8562938047.
      </ReferencesText>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ---------------------------------------------------- //
// ----------------- THEMES FRAMEWORK ----------------- //
// ---------------------------------------------------- //
export const ThemesFrameworkContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Themes Framework Technique</Title>

    <Text>
      Themes are often referred to as `generated themes` because, regardless of
      how they are understood or the actions they inspire, they inherently hold
      the possibility of branching out into numerous other themes. Each
      subsequent theme then sparks new tasks that need to be addressed. This
      concept is well-articulated by Freire (1971).
    </Text>

    <Text>
      <strong>Preparation:</strong> To express and describe reality as the first
      step of diagnosis, the interdisciplinary team must develop potential
      generated themes about the social group`s reality based on secondary
      information. The aim is to form a themes framework to further the dialogic
      process, promote reflections on the participants` own practices, and serve
      as a foundation for detailing the historical context of the targeted
      social group across social, political, cultural, economic, and
      environmental dimensions.
    </Text>

    <ImageWrapper>
      <img
        src={themeFrameworkTeam}
        alt="Interdisciplinary team brainstorming on generated theme"
      />
      <div className="tooltip">
        Interdisciplinary team brainstorming on generated themes
      </div>
    </ImageWrapper>

    <Text>
      <strong>Procedure:</strong> This themes framework should be constructed by
      the interdisciplinary team using secondary information. Each generated
      theme should correspond to a set of reflective questions, a set of
      observations to be made in fieldwork, and the respective information
      collection techniques and group dynamics to be utilized.
    </Text>

    <Text>
      RPER aims to explore the generated themes both qualitatively and
      quantitatively, considering them as a collective rather than in isolation.
      This approach lends a `holistic` nature to the information gathering
      process in analyses and evaluations. Together, these generated themes form
      the `themes universe` of the participating actors or the targeted
      collectivity.
    </Text>

    <Text>
      <strong>Case Study:</strong>As an example, the following framework was
      developed for executing RPER within a meat sheep alliance in Florida, USA.
      This framework was collaboratively created by all members of the
      interdisciplinary team during the preparatory phase preceding the
      implementation of RPER.
    </Text>

    <ImageWrapper>
      <img
        src={themeFrameworkTable}
        alt="Meat Sheep Alliance of Florida themes framework"
      />
      <div className="tooltip">
        Meat Sheep Alliance of Florida themes framework
      </div>
    </ImageWrapper>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
      <ReferencesText>Freire, P. (1971). Pedagogia do oprimido.</ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

export const OtherPreparationContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Other Preparation</Title>

    <Text>
      Following the collection of secondary data, it`s crucial to ensure that
      all other preparations are in place before commencing with fieldwork. This
      phase involves finalizing the logistics, scheduling interviews, setting up
      equipment, and ensuring that the interdisciplinary team is well-briefed
      and aligned with the research objectives. It`s also a time to address any
      gaps identified during the secondary data collection phase, ensuring a
      comprehensive and seamless fieldwork experience.
    </Text>

    <Text>
      Communication with the community is also pivotal during this stage.
      Keeping them informed and ensuring their active participation sets the
      tone for the forthcoming stages. It`s also good practice to review the
      collected secondary data and themes framework developed one more time,
      ensuring that all data points are considered during the fieldwork.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// --------------------------------------------- //
// ----------------- INTERVIEW ----------------- //
// --------------------------------------------- //
export const InterviewsContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Semi-structured Interviews</Title>

    <Text>
      Interviews, or in this case, particularly Semi-structured Interviews offer
      a balance between structured and open-ended questions. They allow for the
      objective comparison of opinions while providing flexibility to explore
      topics spontaneously. Prior knowledge about the interviewee and the topic
      ensures a more in-depth and focused discussion.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------------ //
// ----------------- PRESENTATION ----------------- //
// ------------------------------------------------ //
export const PresentationContent: React.ReactNode = (
  <ContentWrapper>
    <Title>
      Presentation of the Interdisciplinary Team and Members of the Community
    </Title>

    <Text>
      This technique aims to identify the participants, including personal
      details, a bit of their personal history and history with the collectivity
      along other relevant information.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------------------ //
// ----------------- HISTORICAL MAPPING ----------------- //
// ------------------------------------------------------ //
export const HistoricalMappingContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Historical Mapping</Title>

    <Text>
      Historical mapping is a participatory technique that allows communities to
      visually represent their past, present, and envisioned future landscapes.
      It serves as a bridge between a community`s collective memories and their
      aspirations, providing a tangible representation of their experiences and
      future goals.
    </Text>

    <Text>
      <strong>Purpose and Process:</strong> This method aims to capture the
      perception of a community`s space. Members collaboratively design a map
      that reflects their living or working environment, integrating both
      historical perspectives and their future visions. This collective
      representation promotes reflection on the community`s shared reality.
    </Text>

    <ImageWrapper>
      <img
        src={communityDrawing}
        alt="Community members collaboratively drawing a map"
      />
      <div className="tooltip">
        Community members collaboratively drawing a map
      </div>
    </ImageWrapper>

    <Text>
      The historical mapping process involves an on-ground verification called a
      `transect walk`. Here, the interdisciplinary team walks across the map`s
      areas to verify the community`s descriptions. They capture photographs,
      record videos, and sketch landscapes, enhancing the initial map with
      real-time insights.
    </Text>

    <ImageWrapper>
      <img src={communityAndMap} alt="Community members with the  map" />
      <div className="tooltip">Community members with the map</div>
    </ImageWrapper>

    <Text>
      <strong>Advantages:</strong> Historical mapping fosters community
      engagement, ensuring the map truly mirrors their collective experiences
      and desires. It allows for on-the-spot verification, promoting a grounded
      understanding of the area.
    </Text>

    <Text>
      <strong>Limitations:</strong> The method, while powerful, is subjective,
      as it`s based on community perceptions. It might not always synchronize
      with objective realities and can be time-intensive.
    </Text>

    <ImageWrapper>
      <img
        src={communityOfficialMap}
        alt="An official segmented map of a rural settlement"
      />
      <div className="tooltip">
        An official segmented map of a rural settlement
      </div>
    </ImageWrapper>

    <Text>
      <strong>Practical Application:</strong> In areas like São Francisco in
      Formoso−MG, historical mapping enabled the community to plan their spaces
      effectively. The map became a medium for discussions, from infrastructure
      planning to the symbolic importance of land.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------------- //
// ----------------- TRANSECT WALK ----------------- //
// ------------------------------------------------- //
export const TransectWalkContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Transect Walk</Title>

    <Text>
      A Transect Walk, an integral technique of the Rapid Participatory
      Emancipatory Research (RPER) method, is a systematic walk across a
      community or area of interest. This method serves as a complement to the
      Historical Mapping technique, allowing participants to verify and enhance
      the details plotted on the map.
    </Text>

    <Text>
      <strong>Purpose and Process:</strong> The primary goal of the Transect
      Walk is to gather detailed information by traversing the largest possible
      diameter of the area under diagnosis. As the interdisciplinary team walks,
      accompanied by small groups familiar with the region, they observe and
      document aspects predefined by the themes framework. The objective is to
      identify and photograph locations considered critical by the community or
      those representing challenges to overcome.
    </Text>

    <ImageWrapper>
      <img
        src={transectWalkMap}
        alt="Graphical representation of a trajectory for one transect walk defined by the community "
      />
      <div className="tooltip">Trajectory for a community transect walk</div>
    </ImageWrapper>

    <Text>
      Before commencing the Transect Walk, the interdisciplinary team
      collaborates with the community to determine the route. During the walk,
      the team describes the journey both textually and graphically. This
      technique is especially beneficial in rural settlements and communities,
      helping the team technically describe landscapes and socio-environmental
      characteristics.
    </Text>

    <Text>
      <strong>Application:</strong> In places like São Sebastião do Soberbo in
      the State of Minas Gerais, Brazil, the Transect Walk allowed the community
      and the team to gain in-depth insights into their environment. It ensured
      that the community`s perception of the landscape was accurate and grounded
      in reality.
    </Text>

    <ImageWrapper>
      <img
        src={transectWalkCommunity}
        alt="Community members explaining a point of interest during the transect walk"
      />
      <div className="tooltip">Community members during a transect walk</div>
    </ImageWrapper>

    <Text>
      As a technique, the Transect Walk focuses on understanding the present
      landscape while also capturing the historical essence and future
      aspirations of a community. By combining this with the Historical Mapping
      technique, a comprehensive and participatory assessment of an area can be
      achieved.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------------ //
// ----------------- VENN DIAGRAM ----------------- //
// ------------------------------------------------ //
export const VennDiagramContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Venn Diagram</Title>

    <Text>
      The Venn Diagram technique is used to identify and evaluate the
      significance and performance of public and private organizations within a
      community or organization. It visually represents the interrelationship of
      these entities and how they impact the community.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ----------------------------------------------------- //
// ----------------- SEASONAL CALENDAR ----------------- //
// ----------------------------------------------------- //
export const SeasonalCalendarContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Seasonal Calendar</Title>

    <Text>
      The Seasonal Calendar technique visualizes all of the organization`s
      activities over a year. This graphical representation helps in
      understanding the cyclical patterns and determining the best times for
      specific interventions or initiatives.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------------- //
// ----------------- DAILY ROUTINE ----------------- //
// ------------------------------------------------- //
export const DailyRoutineContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Daily Routine Analysis</Title>

    <Text>
      The Daily Routine technique identifies day-to-day activities and the
      division of labor within an organization, rural or not. By mapping out
      these routines, one can plan future activities more effectively and
      identify areas for operational improvements.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ---------------------------------------------------- //
// ----------------- INPUT AND OUTPUT ----------------- //
// ---------------------------------------------------- //
export const InputAndOutputContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Input and Output Analysis</Title>

    <Text>
      The Input and Output technique delves into understanding the production
      system`s dynamics in relation to its market context. By analyzing the
      economic activities and their relationships, one can gain insights into
      the efficiency and areas of improvement within the organization and its
      system.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------------ //
// ----------------- CONSTRUCTION ----------------- //
// ------------------------------------------------ //
export const ConstructionContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Construction Technique</Title>

    <Text>
      The Construction technique promotes critical reflection within a community
      about their current infrastructure conditions and what they aspire to
      `construct` in the near future with the limited resources available. It
      serves as both a diagnostic and a planning tool, encouraging the community
      to envision the construction of their future.
    </Text>

    <Text>
      <strong>Objective:</strong> To stimulate communities to critically
      visualize and plan for their future infrastructure needs using symbolic
      resources.
    </Text>

    <Text>
      Typically, symbolic resources found at the diagnosis location, such as
      stones, sticks, leaves, twigs, etc., are used. This technique is executed
      in small groups that share some cultural identity, like neighbors,
      individuals who partake in mutual aid or labor exchange, or any form of
      solidarity in the organization of work and production.
    </Text>

    <ImageWrapper>
      <img
        src={constructionGroup}
        alt="Group of people discussing around symbolic resources"
      />
      <div className="tooltip">
        Group of people discussing around symbolic resources
      </div>
    </ImageWrapper>

    <Text>
      The interdisciplinary team explains the objective of the technique,
      setting a challenge for each group to ponder about the future of their own
      group and the entire community. Once the activity is explained and the
      challenge presented to participants, the interdisciplinary team
      distributes an equal amount of symbolic resources to each group, setting a
      timeframe for the desired `construction`, representing their perception of
      the future.
    </Text>

    <Text>
      The team monitors the process, capturing photographs, filming, and noting
      down participants` remarks from each group that convey the intent of their
      ongoing `construction`. After the stipulated time, participants from each
      group explain to everyone the significance of their construction, which
      stimulates debate and critical reflections around a given theme framework.
      This provides an opportunity for everyone to understand each group`s and
      individual`s vision for the community`s future.
    </Text>

    <ImageWrapper>
      <img
        src={constructionMaterials}
        alt="Symbolic materials laid out for construction technique"
      />
      <div className="tooltip">
        Symbolic materials laid out for construction technique
      </div>
    </ImageWrapper>

    <Text>
      This technique has been employed in various situations and contexts. For
      instance, during the resettlement of families affected by the Candonga dam
      in Santa Cruz do Escalvado, Minas Gerais, Brazil. This technique was
      utilized to represent the ideal type of housing in the perception of the
      affected groups. Therefore, the challenge for participants was to identify
      the ideal construction type and its territorial organization in the new
      landscape, considering the limited resources available.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Rapid Participatory Emancipatory Research: The
        RPER Method.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ----------------------------------------------- //
// ----------------- FOCUS GROUP ----------------- //
// ----------------------------------------------- //
export const FocusGroupContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Focus Group</Title>

    <Text>
      The Focus Group technique aims to gather qualitative information on
      specific themes. By having a focused and predetermined discussion, it
      captures the collective perspective, providing richer insights into the
      community`s needs and aspirations.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// -------------------------------------------------- //
// ------------- REALITY AND OBJ MATRIX ------------- //
// -------------------------------------------------- //
export const RealityAndObjMatrixContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Reality and Objective Matrix</Title>

    <Text>
      The Reality and Objective Matrix technique is crucial for problem-solving.
      It identifies challenges, their root causes, and potential solutions from
      the participants` perspective, ensuring that interventions are tailored to
      the community`s actual needs.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ----------------------------------------------- //
// ------------- PRIORITIES ELECTION ------------- //
// ----------------------------------------------- //
export const PrioritiesElectionContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Priorities Election</Title>

    <Text>
      Priorities Election is a democratic process to identify the participants`
      socio-economic, political, and technical-productive priorities. By
      understanding these priorities, interventions and programs can be better
      aligned with the community`s aspirations.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------- //
// ------------- OTHER FIELDWORK ------------- //
// ------------------------------------------- //
export const OtherFieldworkContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Other Fieldwork Techniques</Title>

    <Text>
      While many fieldwork techniques are already encompassed in the RPER
      method, its theory allows for adaptability. Depending on the collective
      needs, certain techniques can be included or omitted, ensuring that the
      research process remains flexible and context-specific.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ------------------------------------------------- //
// --------------- EXTRA INFORMATION --------------- //
// ------------------------------------------------- //
export const ExtraInformationContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Extra Information</Title>

    <Text>
      This section is dedicated to providing supplementary details that might
      not fit into the main content but are essential for a comprehensive
      understanding of the study. It may include additional methodologies,
      references, or contextual data that adds depth and breadth to the primary
      findings.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// ---------------------------------------------------- //
// --------------- FINAL CONSIDERATIONS --------------- //
// ---------------------------------------------------- //
export const FinalConsiderationsContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Final Considerations</Title>

    <Text>
      The journey through the RPER method can be insightful, revealing the
      intricacies and nuances of the community under study. This section
      reflects on the overarching themes, findings, and implications of the
      research. It serves as a synthesis of the work done, highlighting its
      significance and suggesting potential avenues for future exploration.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)

// -------------------------------------------------- //
// ----------------- ACKNOWLEDGMENT ----------------- //
// -------------------------------------------------- //
export const AcknowledgmentContent: React.ReactNode = (
  <ContentWrapper>
    <Title>Acknowledgment</Title>

    <Text>
      The success of the research would not have been possible without the
      collaborative efforts of the community, the interdisciplinary team, and
      all stakeholders involved. This section expresses gratitude to everyone
      who contributed their time, expertise, resources, and insights to make the
      project a success.
    </Text>

    <ReferencesWrapper>
      <ReferencesTitle>References & Bibliography</ReferencesTitle>
      <ReferencesText>
        Pereira, J. R. (2017). Diagnóstico Participativo O método DRPE.
      </ReferencesText>
    </ReferencesWrapper>
  </ContentWrapper>
)
