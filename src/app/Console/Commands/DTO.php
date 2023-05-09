<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class DTO extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:dto {model} {--single}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make Repository';

    /**
     * Filesystem instance
     */
    protected Filesystem $files;

    /**
     * Return the create dto stub file path
     */
    public function getDTOCreateStubPath(): string
    {
        return base_path().'/stubs/customize/dto.create.stub';
    }

    /**
     * Return the create dto stub file path
     */
    public function getDTOUpdateStubPath(): string
    {
        return base_path().'/stubs/customize/dto.update.stub';
    }

    /**
     * Return the create dto stub file path
     */
    public function getDTOSingleStubPath(): string
    {
        return base_path().'/stubs/customize/dto.single.stub';
    }

    /**
     * Return the create dto stub destination path
     */
    public function getDTOCreateStubDestination(string $model): string
    {
        return app_path()."/DTO/{$model}/Insert{$model}DTO.php";
    }

    /**
     * Return the create dto stub destination path
     */
    public function getDTOUpdateStubDestination(string $model): string
    {
        return app_path()."/DTO/{$model}/Update{$model}DTO.php";
    }

    /**
     * Return the create single dto stub destination path
     */
    public function getDTOSingleStubDestination(string $model): string
    {
        return app_path()."/DTO/{$model}/{$model}DTO.php";
    }

    /**
     * Map the stub variables present in stub to its value
     */
    public function getStubVariables(): array
    {
        return [
            'model' => $this->argument('model'),
            'single' => $this->option('single') ?? false,
        ];
    }

    /**
     * Replace {{ model }} stub content
     */
    public function getDTOStubContent(string $model, string $path): string
    {
        $contents = file_get_contents($path);
        $contents = str_replace('{{ model }}', $model, $contents);

        return $contents;
    }

    /**
     * Build the directory for the class if necessary.
     */
    protected function makeFile(string $path, string $content): void
    {
        $this->files->put($path, $content);
        $this->info("File {$path} created");
    }

    /**
     * Make a directory.
     */
    protected function makeDir(string $model): bool
    {
        $path = app_path().'/DTO/'.$model;

        return $this->files->makeDirectory($path, 0777, true, true);
    }

    /**
     * Create a new command instance.
     */
    public function __construct(Filesystem $files)
    {
        parent::__construct();

        $this->files = $files;
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $args = $this->getStubVariables();
        $model = $args['model'];
        $single = $args['single'];

        $defaultPath = app_path().'/DTO/';

        if ($this->files->exists($defaultPath.$model)) {
            $this->error("Path for {$model} already exists");

            return;
        }

        if (! $single) {
            $this->createDTOPacket($model);

            return;
        }

        $this->createSingleDTO($model);
    }

    /**
     * Create an insert dto and update dto.
     */
    private function createDTOPacket(string $model): void
    {
        $createDTOPath = $this->getDTOCreateStubDestination($model);
        $updateDTOPath = $this->getDTOUpdateStubDestination($model);

        $this->makeDir($model);
        $this->makeFile($createDTOPath, $this->getDTOStubContent($model, $this->getDTOCreateStubPath()));
        $this->makeFile($updateDTOPath, $this->getDTOStubContent($model, $this->getDTOUpdateStubPath()));
    }

    /**
     * Create only a single dto.
     */
    private function createSingleDTO(string $model): void
    {
        $path = $this->getDTOSingleStubDestination($model);

        $this->makeDir($model);
        $this->makeFile($path, $this->getDTOStubContent($model, $this->getDTOSingleStubPath()));
    }
}
