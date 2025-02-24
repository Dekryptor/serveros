// Copyright (c) 2009-2013 Apple Inc. All Rights Reserved.
// 
// IMPORTANT NOTE: This file is licensed only for use on Apple-branded
// computers and is subject to the terms and conditions of the Apple Software
// License Agreement accompanying the package this file is a part of.
// You may not port this file to another platform without Apple's written consent.
//
// IMPORTANT NOTE: This file is licensed only for use with the Wiki Server feature
// of the Apple Software and is subject to the terms and conditions of the Apple
// Software License Agreement accompanying the package this file is part of.

if (typeof apple_loc_strings == "undefined") {
	apple_loc_strings = {version:'1.0'};
}

var populateStrings = function(obj) {
	for (aProperty in obj) {
		apple_loc_strings[aProperty] = obj[aProperty];
	}
};

populateStrings({
	"_MenuItem.BigScreen": "큰 화면 열기...",
	
	"_XC.BrowserTitle.BotSummary": "Xcode - 모든 봇",
	"_XC.BrowserTitle.BigScreen": "Xcode - 큰 화면",
	"_XC.BrowserTitle.BotDetail": "Xcode - %@1 %@2",
	"_XC.ProductTitle": "Xcode",
	
	"_XC.Sources.AllBots.Title": "모든 봇",
	"_XC.Sources.BigScreen.Title": "큰 화면",
	
	"_XC.Breadcrumb.Xcode": "Xcode",
	"_XC.Breadcrumb.Bots.Title": "봇",
	"_XC.Breadcrumb.BigScreen.Title": "큰 화면",
	
	"_XC.Bot.Integration.Index": "통합(%@)",
	"_XC.Bot.Default.Title": "무제 봇",
	"_XC.Bot.MenuItem.New.Title": "새로운 봇...",
	"_XC.Bot.MenuItem.Delete.Title": "봇 삭제...",
    "_XC.Bot.MenuItem.DownloadLogs.Title": "통합 로그 다운로드…",
	"_XC.Bot.MenuItem.CancelBotRun.Title": "통합 취소",
	"_XC.Bot.MenuItem.CancelBotRun.Error": "통합을 취소할 수 없습니다. 다시 시도하십시오.",
	"_XC.Bot.LatestIntegration.Title": "가장 최신 통합",
	
	"_XC.Bot.Error.DisplayGeneric": "봇을 표시할 수 없습니다. 페이지를 새로 고침하십시오.",
	"_XC.BotRun.Error.DisplayGeneric": "통합을 표시할 수 없습니다. 해당 통합이 삭제되었을 수 있습니다.",
	"_XC.Bot.NotYetRun.Placeholder.Unauthenticated": "이 봇의 통합을 시작하려면 로그인",
	"_XC.Bot.NotYetRun.Placeholder": "이 봇을 시작하려면 통합 클릭",
	"_XC.BotRun.NotYetCompleted.Placeholder": "통합이 아직 완료되지 않았습니다.",
	
	"_XC.Bot.Archive": "아카이브",
	"_XC.Bot.Product": "제품",
	
	"_XC.Bot.LoadingMessage.Delete": "봇 삭제 중...",
	
	"_XC.Grouping.Header.Today": "오늘",
	"_XC.Grouping.Header.Yesterday": "어제",
	"_XC.Grouping.Header.ThisWeek": "최근 7일",
	"_XC.Grouping.Header.LastWeek": "최근 14일",
	"_XC.Grouping.Header.Other": "기타",
	
	"_XC.FilterBarView.Filters.All.Title": "모두",
	"_XC.FilterBarView.Filters.All.Tooltip": "모든 테스트 결과를 봅니다",
	"_XC.FilterBarView.Filters.Passed.Title": "통과됨",
	"_XC.FilterBarView.Filters.Passed.Tooltip": "통과한 테스트를 봅니다",
	"_XC.FilterBarView.Filters.Failed.Title": "실패",
	"_XC.FilterBarView.Filters.Failed.Tooltip": "실패한 테스트를 봅니다",
	
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.ModelName.Title": "장비",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.ModelName.Tooltip": "장비",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.NativeArchitecture.Title": "프로세서",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.NativeArchitecture.Tooltip": "프로세서",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.OperatingSystemVersion.Title": "OS",
	"_XC.BotRunDetailFilterBarView.Filters.TargetDevice.OperatingSystemVersion.Tooltip": "OS",
	
	"_XC.BotRunDetailTable.Header.Title": "테스트 결과",
	"_XC.BotRunDetailTable.NoTestsFound": "발견된 테스트 없음",
	"_XC.BotRunDetailTable.Title.TargetDevice.ModelName": "장비",
	"_XC.BotRunDetailTable.Title.TargetDevice.NativeArchitecture": "프로세서",
	"_XC.BotRunDetailTable.Title.TargetDevice.OperatingSystemVersion": "OS",
	"_XC.BotRunDetailTable.Title.TargetDevice.Name": "이름",
	
	"_XC.BotList.Header.Title.Name": "이름",
	"_XC.BotList.Header.Title.Status": "상태",
	"_XC.BotList.Header.Title.LastIntegration": "마지막",
	"_XC.BotList.Header.Title.NextIntegration": "다음",
	
	"_XC.BotList.StatusCard.Title.LatestIntegration": "가장 최신 통합",
	"_XC.BotList.StatusCard.Title.NextIntegration": "다음 통합",
	"_XC.BotList.StatusCard.Title.Products": "가장 최신 다운로드",
	"_XC.BotList.StatusCard.Empty.LatestIntegration": "완료된 통합 없음",
	"_XC.BotList.StatusCard.Empty.NextIntegration": "예정된 통합 없음",
	"_XC.BotList.StatusCard.Empty.Products": "사용 가능한 다운로드 없음",
	"_XC.BotList.StatusCard.Action.LatestIntegration": "요약 보기",
	"_XC.BotList.StatusCard.Action.NextIntegration": "지금 통합",
	"_XC.BotList.StatusCard.AlternateAction.NextIntegration": "지우기 및 통합",
	"_XC.BotList.StatusCard.Action.Products": "아카이브 보기",
	
	"_XC.BotList.StatusCard.Countdown.Integration.Label": "%@ 통합",
	"_XC.BotList.StatusCard.Countdown.Days.Label": "일",
	"_XC.BotList.StatusCard.Countdown.Hours.Label": "시간",
	"_XC.BotList.StatusCard.Countdown.Minutes.Label": "분",
	"_XC.BotList.StatusCard.Countdown.Interstitial.Queued": "붓이 대기 열에 추가되었고 곧 통합됩니다.",
	"_XC.BotList.StatusCard.Countdown.Interstitial.Starting": "통합 시작 중...",
	
	"_XC.BotList.StatusCard.Products.Created.Label": "%@(이)가 생성됨",
	
	"_XC.BotRunSidebar.Empty.Placeholder": "실행 중인 봇 없음",
	"_XC.BotRunSidebar.Scheme.Integrate": "통합",
	
	"_XC.Bot.Header.Links.Summary.Title": "요약",
	"_XC.Bot.Header.Links.Tests.Title": "테스트",
	"_XC.Bot.Header.Links.Commits.Title": "커밋",
	"_XC.Bot.Header.Links.Archives.Title": "아카이브",
	"_XC.Bot.Header.Links.Logs.Title": "로그",

	"_XC.BotRun.Header.Links.Summary.Title": "(통합 %@) - 요약",
	"_XC.BotRun.Header.Links.Tests.Title": "(통합 %@) - 테스트",
	"_XC.BotRun.Header.Links.Commits.Title": "(통합 %@) - 커밋",
	"_XC.BotRun.Header.Links.Archives.Title": "(통합 %@) - 아카이브",
	"_XC.BotRun.Header.Links.Logs.Title": "(통합 %@) - 로그",
	
	"_XC.Bot.Schedule.Description.Loading": "일정 로드 중...",
	"_XC.Bot.Schedule.Description.Unscheduled": "아직 예정되지 않음",
	"_XC.Bot.Schedule.Description.Unknown": "알 수 없는 일정",
	"_XC.Bot.Schedule.Description.Hourly": "매시간 실행(%@)",
	"_XC.Bot.Schedule.Description.Daily": "매일 실행(%@)",
	"_XC.Bot.Schedule.Description.Weekly": "매주 실행(%@)",
	"_XC.Bot.Schedule.EditDialog.Title": "일정 편집",
	"_XC.Bot.Schedule.EditDialog.Progress.Updating": "일정 업데이트 중...",
	"_XC.Bot.Schedule.EditDialog.Progress.Failed": "봇 일정을 업데이트할 수 없습니다. 다시 시도하십시오.",
	
	"_XC.BotRunScheduleEditorView.ScheduleType.Manual": "수동으로 실행",
	"_XC.BotRunScheduleEditorView.ScheduleType.Periodic": "정기적으로 실행",
	"_XC.BotRunScheduleEditorView.ScheduleType.Poll": "새로운 커밋 폴링",
	"_XC.BotRunScheduleEditorView.ScheduleType.Trigger": "사용자 설정 트리거 스크립트를 사용하여 커밋",
	"_XC.BotRunScheduleEditorView.Schedule.RunThisBot": "%@1<span class=\'day\'> %@2</span><span class=\'time\'> %@3</span><span class=\"minutes\">(1시간 %@4분)</span>",
	"_XC.BotRunScheduleEditorView.Schedule.Repeat.Hourly": "매시간",
	"_XC.BotRunScheduleEditorView.Schedule.Repeat.Daily": "매일",
	"_XC.BotRunScheduleEditorView.Schedule.Repeat.Weekly": "매주",
	
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Integrations": "항상",
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Day": "하루에 한 번",
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Week": "1주에 한 번",
	"_XC.BotRunCleanBuildScheduleEditorView.Select.Never": "안 함",
	"_XC.BotRunCleanBuildScheduleEditorView.Description": "통합을 실행하기 전에 모든 소스 코드, 빌드 제품 및 중간 매체를 제거하십시오.",
	
	"_XC.BotRun.ArchiveProductDownloadView.Placeholder": "다운로드 없음",
	"_XC.BotRun.ArchiveProductDownloadView.Archive.Title": "아카이브",
	"_XC.BotRun.ArchiveProductDownloadView.Product.Title": "제품",
	"_XC.BotRun.ArchiveProductDownloadView.Error.Message": "아카이브가 통합을 하기 위해 필요한 정보를 다운로드할 수 없습니다. 페이지를 다시 로드하십시오.",
	"_XC.BotRun.ArchiveProductDownloadView.UnknownFileSize": "알 수 없는 파일 크기",
	
	"_XC.Bot.Control.Run.Title": "통합",
	"_XC.Bot.Control.CleanRun.Title": "지우기 및 통합",
	"_XC.Bot.Control.Pause.Title": "통합 일시 정지",
	"_XC.Bot.Control.Resume.Title": "통합 재개",
	"_XC.Bot.Control.Cancel.Title": "통합 취소",
	"_XC.Bot.Control.Run.Error": "통합을 시작할 수 없습니다. 다시 시도하십시오.",
	"_XC.Bot.Control.Cancel.Error": "통합을 취소할 수 없습니다. 다시 시도하십시오.", 
	"_XC.Bot.Control.Pause.Error": "통합을 일시 정지할 수 없습니다. 다시 시도하십시오.",
	"_XC.Bot.Control.Resume.Error": "통합을 재개할 수 없습니다. 다시 시도하십시오.",
	
	"_XC.Bot.Status.": "대기됨",
	"_XC.Bot.Status.Ready": "대기됨",
	"_XC.Bot.Status.Running": "실행 중...",
	"_XC.Bot.Status.Completed": "완료됨",
	"_XC.Bot.Status.Failed": "실패",
	"_XC.Bot.Status.Paused": "일시 정지됨",
	"_XC.Bot.Status.Canceled": "취소됨",
	"_XC.Bot.SubStatus.Preparing": "준비 중...",
	"_XC.Bot.SubStatus.Checkout": "소스를 가져오는 중...",
	"_XC.Bot.SubStatus.Building": "통합 중...",
	"_XC.Bot.SubStatus.Uploading": "완료 중...",
	"_XC.Bot.SubStatus.BuildErrors": "완료(오류)",
	"_XC.Bot.SubStatus.TestFailures": "완료(테스트 실패)",
	"_XC.Bot.SubStatus.Warnings": "완료(경고)",
	"_XC.Bot.SubStatus.AnalysisIssues": "완료(분석 이슈)",
	"_XC.Bot.SubStatus.BuildFailed": "빌드 실패",
	"_XC.Bot.SubStatus.Succeeded": "성공",
	"_XC.Bot.SubStatus.CheckoutError": "체크아웃 오류로 실패",
	"_XC.Bot.SubStatus.CommitHistoryError": "커밋 기록을 가져오는 데 실패",
	"_XC.Bot.SubStatus.InternalError": "서버 오류",
	"_XC.Bot.SubStatus.InternalCredentialServerError": "자격 증명 오류로 실패",
	"_XC.Bot.SubStatus.InternalCheckoutError": "체크아웃 오류로 실패",
	"_XC.Bot.SubStatus.InternalBuildError": "빌드 오류로 실패",
	"_XC.Bot.SubStatus.InternalUploadFilesError": "파일 업로드 실패",
	"_XC.Bot.SubStatus.InternalPostTimeseriesError": "테스트 결과 업로드 실패",
	"_XC.Bot.SubStatus.InternalFinalizeBuildError": "통합 완료 실패",
	"_XC.Bot.SubStatus.InternalUpdateBotError": "봇 상태 업데이트 실패",
	
	"_XC.Bot.NewBotAssistant.NoRepositories.Error": "이 서버에 구성된 저장소가 없습니다. 관리자가 OS X Server 응용 프로그램을 사용하여 새로운 저장소를 추가할 수 있습니다.",
	"_XC.Bot.NewBotAssistant.Unknown.Error": "서버에서 원격 저장소를 얻을 수 없습니다. 다시 시도하십시오.",
	
	"_XC.BotInfoView.Repository.Label": "저장소",
	"_XC.BotInfoView.Repository.Remote.Title": "%@1 - %@2",
	"_XC.BotInfoView.Repository.HostedLocally.Title": "%@1 - %@2에서 호스트됨",
	"_XC.BotInfoView.Repository.NoRepositories.Description": "발견된 원격 저장소 없음",
	"_XC.BotInfoView.Repository.Singular.ExtraRepository": "%@개의 추가 저장소",
	"_XC.BotInfoView.Repository.Plural.ExtraRepository": "%@개의 추가 저장소",
	"_XC.BotInfoView.Repository.Singular.ExtraBranch": "%@개의 브랜치",
	"_XC.BotInfoView.Repository.Plural.ExtraBranch": "%@개의 브랜치",
	"_XC.BotInfoView.BranchName.Label": "브랜치",
	"_XC.BotInfoView.BranchName.Placeholder": "여기에 브랜치 이름을 입력하십시오",
	"_XC.BotInfoView.SchemeName.Label": "체계",
	"_XC.BotInfoView.SchemeName.Placeholder": "여기에 스키마 이름을 입력하십시오",
	"_XC.BotInfoView.SchemeName.Description": "스키마 이름이 구성에 사용됩니다. 이 스키마는 공유 스키마여야 합니다.",
	"_XC.BotInfoView.WorkspaceOrProjectPath.Label": "프로젝트 경로",
	"_XC.BotInfoView.WorkspaceOrProjectPath.Placeholder": "여기에 관련 프로젝트 또는 작업공간 경로를 입력하십시오",
	"_XC.BotInfoView.WorkspaceOrProjectPath.Description": "이 저장소에서.xcodeproj 또는 .xcworkspace 파일의 상대 경로입니다. 예: shared/Project.xcodeproj",
	"_XC.BotInfoView.Title.Label": "봇 이름",
	"_XC.BotInfoView.Title.Placeholder": "여기에 봇 이름을 입력하십시오",
	"_XC.BotInfoView.IntegrateImmediately.Label": "즉시 통합",
	
	"_XC.BotScheduleInfoView.Schedule.Label": "일정",
	"_XC.BotScheduleInfoView.Actions.Label": "동작",
	"_XC.BotScheduleInfoView.IntegratePerformsAnalyze.Checkbox.Label": "분석 동작 수행",
	"_XC.BotScheduleInfoView.IntegratePerformsTest.Checkbox.Label": "테스트 동작 수행",
	"_XC.BotScheduleInfoView.IntegratePerformsArchive.Checkbox.Label": "아카이브 동작 수행",
	"_XC.BotScheduleInfoView.BuildFromClean.Label": "지우기",
	
	"_XC.BotTestingInfoView.Label": "다음 프로젝트 테스트",
	"_XC.BotTestingInfoView.Type.Mac": "Mac",
	"_XC.BotTestingInfoView.Type.iOS": "iOS",
	"_XC.BotTestingInfoView.RunTestsOn": "다음에서 테스트 실행",
	"_XC.BotTestingInfoView.RunTestsOn.AllDevices": "모든 장비",
	"_XC.BotTestingInfoView.RunTestsOn.AllSimulators": "모든 시뮬레이터",
	"_XC.BotTestingInfoView.RunTestsOn.AllDevicesAndSimulators": "모든 장비 및 시뮬레이터",
	"_XC.BotTestingInfoView.RunTestsOn.SpecificDevices": "특정 장비",
	"_XC.BotTestingInfoView.Seperator.Devices": "연결된 장비",
	"_XC.BotTestingInfoView.Seperator.Simulators": "시뮬레이터",
	"_XC.BotTestingInfoView.NoDevices.Placeholder": "발견된 장비 또는 시뮬레이터 없음",
	"_XC.BotTestingInfoView.UnknownDevice": "알 수 없는 장비",
	"_XC.BotTestingInfoView.UnknownSoftwareVersion": "알 수 없는 소프트웨어 버전",
	
	"_XC.BotNotificationsInfoView.OnSuccess.Label": "성공",
	"_XC.BotNotificationsInfoView.OnSuccess.Checkbox.Label": "커밋한 모든 사람에게 이메일로 보내기",
	"_XC.BotNotificationsInfoView.OnFailure.Label": "실패",
	"_XC.BotNotificationsInfoView.OnFailure.Checkbox.Label": "커밋한 모든 사람에게 이메일로 보내기",
	"_XC.BotNotificationsInfoView.AdditionalEmails.Label": "쉼표로 구분된 다른 이메일 주소 추가:",
	"_XC.BotNotificationsInfoView.AdditionalEmails.Placeholder": "여기에 하나 이상의 유효한 이메일 주소를 입력하십시오",
	
	"_XC.NewBotAssistant.Title": "새로운 봇 생성",
	"_XC.NewBotAssistant.Title.Step.1": "(1/4단계)",
	"_XC.NewBotAssistant.Title.Step.2": "(2/4단계)",
	"_XC.NewBotAssistant.Title.Step.3": "(3/4단계)",	
	"_XC.NewBotAssistant.Title.Step.4": "(4/4단계)",
	"_XC.NewBotAssistant.Button.Next": "계속",
	"_XC.NewBotAssistant.Button.Previous": "뒤로 이동",
	"_XC.NewBotAssistant.Button.Cancel": "취소",
	"_XC.NewBotAssistant.Button.Create": "생성",
	"_XC.NewBotAssistant.Button.Done": "봇 보기",
	"_XC.NewBotAssistant.Confirmation": "%@ 봇이 생성되었으며 실행되거나 예정된 일정이 준비되었습니다. 설정 보기에서 새로운 봇에 대한 추가 구성 옵션을 사용할 수 있습니다.",
	"_XC.NewBotAssistant.Error": "새로운 봇을 생성할 수 없습니다. 다시 시도하십시오.",
	
	"_XC.Bot.IssuesStack.Errors.Title": "오류",
	"_XC.Bot.IssuesStack.AnalysisIssues.Title": "분석 이슈",
	"_XC.Bot.IssuesStack.Warnings.Title": "경고",
	"_XC.Bot.IssuesStack.Empty.Placeholder": "오류, 분석 이슈 또는 경고 없음",
	
	"_XC.Bot.Summary.IntegrationResults.Title": "통합 결과",
	"_XC.Bot.Summary.LatestIntegration.Title": "가장 최신 통합",
	"_XC.Bot.Summary.LatestIntegration.Status.Title": "상태:",
	"_XC.Bot.Summary.LatestIntegration.Start.Title": "시작:",
	"_XC.Bot.Summary.LatestIntegration.Duration.Title": "실행 시간:",
	"_XC.Bot.Summary.LatestIntegration.Commits.None": "새로운 커밋 없음",
	"_XC.Bot.Summary.LatestIntegration.Commits.Singular": "1개의 커밋",
	"_XC.Bot.Summary.LatestIntegration.Commits.Plural": "%@개 커밋",
	"_XC.Bot.Summary.Downloads.Title": "다운로드",
	
	"_XC.Bot.Summary.Errors.Label": "오류",
	"_XC.Bot.Summary.Warnings.Label": "경고",
	"_XC.Bot.Summary.AnalysisIssues.Label": "분석",
	"_XC.Bot.Summary.TestsTotal.Label": "테스트한 총 횟수",
	"_XC.Bot.Summary.TestsPassed.Label": "통과된 테스트",
	"_XC.Bot.Summary.TestsFailed.Label": "테스트 실패",
	"_XC.Bot.Summary.LastRun.LastIntegrationResults.Title": "최근 통합 결과",
	"_XC.Bot.Summary.LastRun.Errors.Singular.Count": "1개의 오류",
	"_XC.Bot.Summary.LastRun.Errors.Plural.Count": "%@개의 오류",
	"_XC.Bot.Summary.LastRun.Errors.None.Count": "오류 없음",
	"_XC.Bot.Summary.LastRun.AnalysisIssues.Singular.Count": "1개의 분석 이슈",
	"_XC.Bot.Summary.LastRun.AnalysisIssues.Plural.Count": "%@개의 분석 이슈",
	"_XC.Bot.Summary.LastRun.AnalysisIssues.None.Count": "분석 이슈 없음",
	"_XC.Bot.Summary.LastRun.Issues.Singular.Count": "1개의 이슈",
	"_XC.Bot.Summary.LastRun.Issues.Plural.Count": "%@개의 이슈",
	"_XC.Bot.Summary.LastRun.Issues.None.Count": "이슈 없음",
	"_XC.Bot.Summary.LastRun.Warnings.Singular.Count": "1개의 경고",
	"_XC.Bot.Summary.LastRun.Warnings.Plural.Count": "%@개의 경고",
	"_XC.Bot.Summary.LastRun.Warnings.None.Count": "경고 없음",
	"_XC.Bot.Summary.LastRun.Test.Passes.Count": "%@개 테스트 통과됨",
	"_XC.Bot.Summary.LastRun.Test.Failures.Count": "%@/%@개의 테스트 실패",
	"_XC.Bot.Summary.LastRun.Test.None.Count": "테스트 없음",
	"_XC.Bot.Summary.LastRun.Test.Summation.Count": "%@/%@개의 테스트",
	"_XC.Bot.Summary.Unexpected.Error": "예기치 않은 오류가 발생했습니다. 이 페이지를 다시 로드하십시오.",
	
	"_XC.Bot.Summary.IntegrationHistory.Title": "통합 기록",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Title": "빌드 기록",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Legend.Errors": "오류",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Legend.Warnings": "경고",
	"_XC.Bot.Summary.HistoryGraphs.ErrorsWarningsIssues.Legend.Issues": "분석 이슈",
	"_XC.Bot.Summary.HistoryGraphs.UnitTests.Title": "테스트 기록",
	"_XC.Bot.Summary.HistoryGraphs.UnitTests.Legend.Pass": "통과된 테스트",
	"_XC.Bot.Summary.HistoryGraphs.UnitTests.Legend.Fail": "테스트 실패",
	"_XC.Bot.Summary.HistoryGraphs.Unexpected.Error": "그래프 데이터를 불러오는 동안 예기치 않은 오류가 발생했습니다. 이 페이지를 다시 로드하십시오.",
	"_XC.Bot.Summary.LastIntegrationDetails.Title": "최근 통합 세부사항",
	"_XC.Bot.Summary.IntegrationDetails.Title": "통합 세부사항",
	
	"_XC.Bot.Tests.Results.Heading.Integration": "적분법",
	"_XC.Bot.Tests.Results.Heading.UnitTests": "테스트",
	"_XC.Bot.Tests.Results.Heading.TotalTests": "전체",
	"_XC.Bot.Tests.Results.Heading.FailedTest": "실패",
	"_XC.Bot.Tests.Results.Pass.Title": "통과됨",
	"_XC.Bot.Tests.Results.Fail.Title": "실패",
	"_XC.Bot.Tests.Results.NoResult.Title": "결과 없음",
	"_XC.Bot.Tests.Results.Unexpected.Error": "테스트 데이터를 불러오는 동안 예기치 않은 오류가 발생했습니다. 이 페이지를 다시 로드하십시오.",
	"_XC.Bot.Tests.NoFail": "실패한 테스트 없음",
	
	"_XC.Bot.CommitHistory.BotRun.Empty.Placeholder": "이 통합에 새로운 커밋이 없습니다.",
	"_XC.Bot.CommitHistory.Bot.Empty.Placeholder": "최근 통합에 새로운 커밋이 없습니다.",
	"_XC.Bot.CommitHistory.Files.Modified.Singular": "%@개의 파일 수정됨",
	"_XC.Bot.CommitHistory.Files.Modified.Plural": "%@개의 파일 수정됨",
	"_XC.Bot.CommitHistory.Unexpected.Error": "이 통합에 대한 커밋을 표시할 수 없습니다.",
	"_XC.Bot.CommitHistory.Commit.NoMessage": "제공된 커밋 메시지가 없습니다.",
	
	"_XC.Bot.Logs.Title": "로그",
	"_XC.Bot.Logs.IntegrationDetails.Title": "오류, 경고 및 분석 이슈",
	"_XC.Bot.Logs.BuildAgent.Title": "빌드 에이전트 로그",
	"_XC.Bot.Logs.SCM.Title": "소스 제어 로그",
	"_XC.Bot.Logs.SCM.Empty.Placeholder": "소스 제어 로그 없음",
	"_XC.Bot.Logs.Build.Title": "빌드 로그",
	"_XC.Bot.Logs.Build.Empty.Placeholder": "빌드 로그 없음",
	"_XC.Bot.Logs.Empty.Placeholder": "발견된 로그 없음",
	"_XC.Bot.Logs.Log.Bot.Empty.Placeholder": "이 통합에 로그를 사용할 수 없음",
	"_XC.Bot.Logs.Log.BotRun.Empty.Placeholder": "이 통합에 로그를 사용할 수 없음",
	"_XC.Bot.Logs.Log.Pruned": "이 통합에 대한 로그를 제거함",
	"_XC.Bot.Logs.Unexpected.Error": "로그를 표시할 수 없습니다",
	
	"_XC.Bot.Archives.Unknown.Filename": "알 수 없음",
	"_XC.Bot.Archives.ListTitle": "아카이브",
	"_XC.Bot.Archives.List.Archive": "아카이브",
	"_XC.Bot.Archives.List.Archive.DeleteConfirmationMessage": "이 아카이브를 삭제하겠습니까?  이 동작은 취소할 수 없습니다.",
	"_XC.Bot.Archives.List.Archive.DeleteDialogTitle": "아카이브 삭제",
	"_XC.Bot.Archives.List.Archive.DeleteFailedMessage": "빌드 아카이브/제품을 삭제할 수 없습니다. 다시 시도하십시오.",
	"_XC.Bot.Archives.List.Product": "제품",
	"_XC.Bot.Archives.List.Product.DeleteConfirmationMessage": "이 제품을 삭제하겠습니까?  이 동작은 취소할 수 없습니다.",
	"_XC.Bot.Archives.List.Product.DeleteDialogTitle": "제품 삭제",
	"_XC.Bot.Archives.List.DeleteButton": "삭제",
	"_XC.Bot.Archives.List.Header.Filetype": "유형",
	"_XC.Bot.Archives.List.Header.Filename": "이름",
	"_XC.Bot.Archives.List.Header.LastModified": "날짜",
	"_XC.Bot.Archives.List.Header.IntegrationNumber": "적분법",
	"_XC.Bot.Archives.List.Header.Filesize": "크기",
	"_XC.Bot.Archives.List.Header.Filesize": "크기",
	"_XC.Bot.Archives.Placeholder.NoArchivesFound": "발견된 아카이브 없음",
	"_XC.Bot.Archives.Pruned": "이 통합에 대한 아카이브가 제거됨",
	
	"_XC.Bot.Settings.MenuItem.Title": "봇 설정...",
	"_XC.Bot.Settings.Dialog.Title": "봇 설정",
	"_XC.Bot.Settings.Fetch.Error.Title": "봇 설정을 얻을 수 없습니다. 다시 시도하십시오.",
	"_XC.Bot.Settings.Save.Button.Title": "저장",
	"_XC.Bot.Settings.Save.Error": "봇 설정을 저장할 수 없습니다. 다시 시도하십시오.",
	"_XC.Bot.Settings.Unexpected.Error": "예기치 않은 오류가 발생했습니다. 다시 시도하십시오.",
	"_XC.Bot.Settings.Tabs.Server": "서버",
	"_XC.Bot.Settings.Tabs.Schedule": "일정",
	"_XC.Bot.Settings.Tabs.Testing": "테스트",
	"_XC.Bot.Settings.Tabs.Notifications": "알림",
	"_XC.Bot.Settings.BotSettingsUpdated": "_XC.Bot.Settings.BotSettingsUpdated",
    
    "_XC.Bot.DownloadLogs.Dialog.Title": "통합(%@) 로그 다운로드",
    "_XC.Bot.DownloadLogs.CancelButton.Title": "취소",
    "_XC.Bot.DownloadLogs.DownloadButton.Title": "다운로드",
    "_XC.Bot.DownloadLogs.Logs.Label": "포함된 로그",
    "_XC.Bot.DownloadLogs.BuildLogs.Checkbox.Label": "빌드 로그",
    "_XC.Bot.DownloadLogs.SourceControlLogs.Checkbox.Label": "소스 제어 로그",
    "_XC.Bot.DownloadLogs.XcodeServerLogs.Checkbox.Label": "Xcode 서버 빌드 서비스 출력",
    "_XC.Bot.DownloadLogs.XcodeOutput.Checkbox.Label": "원본 \'xcodebuild\' 빌드 번들",
    "_XC.Bot.DownloadLogs.BotConfigAndVersions.Checkbox.Label": "봇 구성 및 버전 정보",
    "_XC.Bot.DownloadLogs.NoLogsAvailable.Alert": "선택한 통합에 대해 사용 가능한 로그가 없습니다. 서버에서 자동으로 제거된 것 같습니다.",
    "_XC.Bot.DownloadLogs.NeverRun.Alert": "이 봇은 실행된 적이 없으므로 현재 사용 가능한 로그가 없습니다.",
    "_XC.Bot.DownloadLogs.Error.Alert": "이 통합에 대한 로그에 관한 정보를 불러오는 동안 오류가 발생했습니다. 나중에 다시 시도하거나 서버 관리자에게 문의하십시오.",
	
	"_XC.Bot.RunAudit.Empty.Placeholder": "발견된 감사 기록 없음",
	
	"_Dialogs.Delete.Notification.NotBotOwner.Error": "오직 이 봇의 소유자만 이 봇을 삭제할 수 있습니다.",
	"_Dialogs.Delete.Notification.NotBotOwner.Error": "오직 이 봇의 소유자만 이 봇을 삭제할 수 있습니다.",
	
	// Do not localize these help links.
	"_XC.Help.Desktop.URL": "https://help.apple.com/xcode/mac/1.0/",
	"_XC.Help.iPad.URL": "https://help.apple.com/xcode/ipad/1.0/",
	
	// WAI ARIA - Accessiblity
	"_XC.Accessibility.Button.Delete": "삭제",
	"_XC.Accessibility.Navigation.IntegrationMenu": "통합 메뉴",
	"_XC.Accessibility.Label.Devices": "장비",
	"_XC.Accessibility.Label.LastIntegration": "가장 최신 통합",
	"_XC.Accessibility.Label.NextIntegration": "다음 통합",
	"_XC.Accessibility.Label.LatestDownloads": "가장 최신 다운로드",
	"_XC.Accessibility.Label.ListStatusView": "목록 상태 보기",
	"_XC.Accessibility.Label.Downloads": "다운로드",
	"_XC.Accessibility.Label.IntegrateNumber": "통합 번호",
	"_XC.Accessibility.Label.Header": "헤더",
	"_XC.Accessibility.Label.Details": "세부사항",
	"_XC.Accessibility.Label.DeviceInfo": "장비 정보",
	"_XC.Accessibility.Label.TestResultsList": "테스트 결과 목록",
	"_XC.Accessibility.Label.TestSucceed": "테스트 성공",
	"_XC.Accessibility.Label.Fail": "실패",
	"_XC.Accessibility.Label.Success": "성공",
	"_XC.Accessibility.Label.TabNavigation": "탭 탐색",
	"_XC.Accessibility.Label.Content": "콘텐츠",
	"_XC.Accessibility.Label.TestsResult": "테스트 결과",
	"_XC.Accessibility.Label.ResultSummary": "결과 요약",
	"_XC.Accessibility.Label.IntegrationResult": "기록",
	"_XC.Accessibility.Label.IntegrationResult": "기록",
	"_XC.Accessibility.Label.BotSummary": "봇 요약"
});
